import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { EditFlyerDetail } from '../apis/FlyerDetail';
import { CategoryItem, CategoryName } from '../constants/categorys';
import { FlyerRegisterProps } from '../interfaces/flyerForm';
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '../utils/storage';
import {
  checkCategory,
  checkChattingUrl,
  checkContact,
  checkEmailUrl,
  checkMainText,
  checkTags,
  checkTitle,
} from '../utils/validateFlyerForm';
import { flyerRegister, flyerUpdate } from './../apis/Flyer';
import { ROUTES } from './../constants/routes';
import { useFetchImage } from './useFetchImage';

const useMakeFlyer = () => {
  const navigate = useNavigate();
  const [flyerParams] = useSearchParams();
  const postId = flyerParams.get('postId');
  const [serverImage, setServerImage] = useState<string[]>([]);
  const image = useFetchImage(serverImage);
  const { images } = image;
  const [category, setCategory] = useState<CategoryName>('전체');
  const [title, setTitle] = useState<string>('');
  const [mainText, setMainText] = useState<string>('');
  const [tag, setTag] = useState<string>('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [contact, setContact] = useState<string[]>([]);
  const [address, setAddress] = useState({
    chatting: '',
    email: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false); //제출버튼 클릭 시

  // 임시저장 데이터
  interface TmpInfo {
    category: CategoryName;
    title: string;
    mainText: string;
    tagList: string[];
    contact: string[];
    chatting: string;
    email: string;
  }
  const temporaryInfo: TmpInfo = {
    category,
    title,
    mainText,
    tagList,
    contact,
    chatting: address.chatting,
    email: address.email,
  };

  // 제출 버튼 클릭하면 로딩
  const handleLoading = isLoading ? 'on' : undefined;

  // 카카오톡 오픈채팅 주소 입력 input 띄우기
  const isChatOn = contact.includes('chatting');

  // 이메일 주소 입력 input 띄우기
  const isEmailOn = contact.includes('email');

  // 뒤로가기 confirm 창
  const backPage = () => {
    if (confirm('전단지 작성을 취소하시겠어요?')) {
      navigate(-1);
    }
  };
  // 임시저장 버튼 클릭
  const handleSave = () => {
    alert('임시 저장되었습니다');
    setLocalStorage('tmp', temporaryInfo);
  };

  // 제출 버튼 클릭
  const handleSubmit = async () => {
    setIsLoading(true);

    const data: FlyerRegisterProps = {
      postRequestDto: {
        categoryKeyword: category,
        contactWay: contact.join(','),
        email: isEmailOn ? address.email : undefined,
        kakaoUrl: isChatOn ? address.chatting : undefined,
        tags: tagList.join(','),
        title,
        content: mainText,
      },
      imageFile: images[0]?.image,
      imageFileSecond: images[1]?.image,
    };

    const formData = new FormData();
    if (!postId) {
      formData.append('imageFile', data.imageFile);
      formData.append('imageFileSecond', data.imageFileSecond);
      formData.append(
        'postRequestDto',
        new Blob([JSON.stringify(data.postRequestDto)], {
          type: 'application/json',
        })
      );
    } else {
      formData.append('updateImage', data.imageFile);
      formData.append('updateImageSecond', data.imageFileSecond);
      formData.append(
        'postUpdateRequestDto',
        new Blob([JSON.stringify(data.postRequestDto)], {
          type: 'application/json',
        })
      );
    }
    if (checkAll()) {
      const success = !postId
        ? await flyerRegister(formData)
        : await flyerUpdate(formData, Number(postId));
      if (success) {
        if (!postId) {
          alert('전단지가 등록되었습니다!');
          removeLocalStorage('tmp');
          navigate(ROUTES.STREET.ROOT, { replace: true });
        } else {
          alert('전단지가 수정되었습니다!');
          navigate(ROUTES.FLYER.DETAIL(Number(postId)), { replace: true });
        }
      } else {
        alert('전단지 등록에 실패했습니다 😭');
      }
    }

    setIsLoading(false);
  };

  // 유효성 검사
  const checkAll = () => {
    if (!checkCategory(category)) return false;
    if (!checkTitle(title)) return false;
    if (!checkMainText(mainText)) return false;
    if (!checkTags(tagList)) return false;
    if (!checkContact(contact)) return false;
    if (isChatOn) {
      if (!checkChattingUrl(address.chatting)) return false;
    }
    if (isEmailOn) {
      if (!checkEmailUrl(address.email)) return false;
    }
    return true;
  };

  // 카테고리 선택 시
  const handleChangeRadio = (e: React.ChangeEvent<HTMLFormElement>) => {
    const value: CategoryName = e.target.value;
    setCategory(value);
  };

  // 선택한 카테고리에 따라 추천태그가 바뀜
  const suggestTags = CategoryItem.find(({ id }) => id === category)?.tag || '';

  // 제목 작성
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
    if (value.length > 35) {
      alert('제목은 35자까지만 쓸 수 있어요 😥');
    }
  };

  //본문 작성
  const handleChangeMainText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMainText(value);
  };

  // 사용자의 태그 설정
  const handleTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTag(value);
  };

  // 사용자의 태그 설정 - enter 버튼으로 추가 기능
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (tagList.length === 3) return alert('태그는 3개까지 추가 가능합니다.');
      setTagList((prev) => [...prev, tag]);
      setTag('');
    }
  };

  // 사용자의 태그 설정 - x버튼으로 태그 삭제
  const handleDeleteTag = (v: string) => {
    setTagList((prev) => prev.filter((tag) => v !== tag));
  };

  // 연락수단 설정
  const handleContact = (e: React.FormEvent<HTMLFormElement>) => {
    const { checked, value } = e.target as HTMLInputElement;
    if (checked) {
      setContact([...contact, value]);
    } else {
      setContact(contact.filter((item) => value !== item));
    }
  };

  // 오픈채팅 주소, 이메일 주소 입력
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  useEffect(() => {
    const tmp: TmpInfo = getLocalStorage('tmp');
    setTimeout(() => {
      if (tmp && confirm('임시 저장된 글이 있어요! 불러올까요?')) {
        setCategory(tmp.category);
        setTitle(tmp.title);
        setMainText(tmp.mainText);
        setTagList(tmp.tagList);
        setContact(tmp.contact);
        setAddress({ chatting: tmp.chatting, email: tmp.email });
      }
    }, 500);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (postId) {
      const getDetail = async () => {
        const data = await EditFlyerDetail(Number(postId));
        if (data) {
          setCategory(data.categoryKeyword);
          setTitle(data.title);
          setMainText(data.content);
          setTagList(data.tags);
          setContact(data.contactWay.split(','));
          setAddress({
            chatting: data.kakaoUrl || '',
            email: data.email || '',
          });
          if (data.img) setServerImage([data.img]);
          if (data.img && data.imgSecond)
            setServerImage([data.img, data.imgSecond]);
        }
      };
      getDetail();
    }
  }, []);

  return {
    category: { backPage, handleChangeRadio, category },
    form: {
      handleChangeTitle,
      handleChangeMainText,
      handleTag,
      handleKeyDown,
      handleDeleteTag,
      handleContact,
      handleSubmit,
      handleAddress,
      checkAll,
      handleSave,
      handleLoading,
      isLoading,
      postId,
      isChatOn,
      isEmailOn,
      suggestTags,
      image,
      tagList,
      tag,
      title,
      mainText,
      contact,
      address,
    },
  };
};

export default useMakeFlyer;
