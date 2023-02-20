import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CategoryItem, CategoryName } from '../constants/categorys';
import { useFetchImage } from './useFetchImage';

const useMakeFlyer = () => {
  const navigate = useNavigate();
  const image = useFetchImage([
    /* 서버에서 불러오는 이미지 */
  ]);
  const { images } = image;
  const [category, setCategory] = useState<CategoryName>();
  const [title, setTitle] = useState<string>('');
  const [mainText, setMainText] = useState<string>('');
  const [tag, setTag] = useState<string>('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [contact, setContact] = useState<string[]>([]);
  const [address, setAddress] = useState({
    chatting: '',
    email: '',
  });

  // 뒤로가기 confirm 창
  const backPage = () => {
    if (confirm('전단지 작성을 취소하시겠어요?')) {
      navigate(-1);
    }
  };
  const handleSubmit = () => {
    const formData = {
      category,
      title,
      mainText,
      tagList,
      contact,
      address,
      image: images.map(({ image }) => image),
    };
    checkAll() && console.log(formData);
  };

  // 유효성 검사
  const checkAll = () => {
    if (!checkCategory(category)) {
      return false;
    }
    if (!checkTitle(title)) {
      return false;
    }
    if (!checkMainText(mainText)) {
      return false;
    }
    if (!checkTags(tagList)) {
      return false;
    }
    if (!checkContact(contact)) {
      return false;
    }
    if (contact.includes('chatting')) {
      if (!checkChattingUrl(address.chatting)) return false;
    }
    if (contact.includes('email')) {
      if (!checkEmailUrl(address.email)) return false;
    }
    return true;
  };

  // 공백확인 함수
  const checkExistData = (value: string, dataName: string) => {
    if (value === '') {
      alert(dataName + ' 입력해주세요!');
      return false;
    }
    return true;
  };

  // 카테고리 유효성 검사: 필수로 체크해야 함
  const checkCategory = (category: undefined | CategoryName) => {
    if (category === undefined) {
      alert('카테고리를 설정해주세요!');
      return false;
    }
    return true;
  };

  // 제목 유효성 검사: 공백 금지, 7자 이상 30자 이하
  const checkTitle = (title: string) => {
    if (!checkExistData(title, '제목을')) return false;
    if (title.length < 7) {
      alert('제목을 7자 이상으로 작성해주세요 😳');
      return false;
    }
    return true;
  };

  // 본문 유효성 검사: 공백 금지, 최대 1000자
  const checkMainText = (mainText: string) => {
    if (!checkExistData(mainText, '본문을')) return false;
    return true;
  };

  // 태그 입력 유효성 검사: 최소 한 개의 태그 설정해야 함.
  const checkTags = (tag: string[]) => {
    if (tag.length === 0) {
      alert('최소 한 개의 태그를 설정해주세요 😳');
      return false;
    }
    return true;
  };

  // 연락수단 유효성 검사: 최소 한 개의 연락수단을 설정해야 함.
  const checkContact = (contact: string[]) => {
    if (contact.length === 0) {
      alert('최소 한 개의 연락 수단을 설정해주세요!');
      return false;
    }
    return true;
  };

  // 카카오톡 오픈채팅 주소 유효성 검사: 공백 금지, https://open.kakao.com/... 형식
  const checkChattingUrl = (url: string) => {
    if (url.length === 0) {
      alert('오픈채팅방 주소를 입력해주세요!');
      return false;
    }
    const urlForm = /^(https:\/\/)(open)(\.)(kakao)(\.)(com)(\/)([a-zA-z0-9])/g;
    if (!urlForm.test(url)) {
      alert('오픈채팅방 주소를 정확히 입력해주세요!');
      return false;
    }
    return true;
  };

  // 이메일 주소 유효성 검사: 공백 금지, 올바른 이메일 형식
  const checkEmailUrl = (url: string) => {
    if (url.length === 0) {
      alert('이메일 주소를 입력해주세요!');
      return false;
    }
    const urlForm =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    if (!urlForm.test(url)) {
      alert('이메일 주소를 정확히 입력해주세요!');
      return false;
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
    if (value.length > 30) {
      alert('제목은 30자까지만 쓸 수 있어요 😥');
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

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };
  // 카카오톡 오픈채팅 주소 입력 input 띄우기
  const isChatOn = contact.includes('chatting');

  // 이메일 주소 입력 input 띄우기
  const isEmailOn = contact.includes('email');

  return {
    category: { backPage, handleChangeRadio },
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
      isChatOn,
      isEmailOn,
      suggestTags,
      image,
      tagList,
      tag,
    },
  };
};

export default useMakeFlyer;
