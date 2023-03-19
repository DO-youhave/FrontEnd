import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Bookmark, FlyerDetail, ReportDetail } from '../apis/FlyerDetail';
import { CategoryItem } from '../constants/categorys';
import { ROUTES } from '../constants/routes';
import { queryClient } from '../main';
import useRemoveFlyer from './useRemoveFlyer';

const useGetFlyerDetail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [openDots, setOpenDots] = useState(false); // 전단지 메뉴 on,off
  const [openContact, setOpenContact] = useState(false); // 연락수단 on,off
  const [rows, setRows] = useState(false); // 댓글(parent) 입력 창(상) on, off
  const [rowsBottom, setRowsBottom] = useState(false); // 댓글(parent) 입력 창(하) on, off
  const postId = Number(searchParams.get('id'));

  const handleBack = () => {
    navigate(-1);
  };
  const handleDots = () => {
    setOpenDots(!openDots);
  };

  const { data: info } = useQuery(['flyer', postId], () => FlyerDetail(postId));

  // 전단지 북마크
  const handleBookmark = async () => {
    try {
      if (info?.mark) {
        if (confirm('북마크를 취소하시겠어요?')) {
          await Bookmark(postId, false);
          alert('북마크 취소 완료!');
          queryClient.invalidateQueries(['flyer', postId]);
        }
      } else {
        if (confirm('북마크 하시겠어요?')) {
          await Bookmark(postId, true);
          alert('북마크 완료! 마이페이지에서 확인하세요!');
          queryClient.invalidateQueries(['flyer', postId]);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 전단지 신고
  const handleReport = async () => {
    try {
      if (confirm('이 전단지를 신고하시겠어요?')) {
        await ReportDetail(postId);
        alert('신고되었습니다! 깨끗한 사이트를 위한 협조 감사합니다 😄');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 전단지 삭제
  const { handleRemove } = useRemoveFlyer(postId);

  // 전단지 카테고리 영어 데이터 => 한글화
  const handleCategory = CategoryItem.find(
    (item) => item.id === info?.categoryKeyword
  )?.name;

  // 상세 카테고리로 이동
  const goCategory = () => {
    navigate(ROUTES.STREET.DETAIL(info?.categoryKeyword, '', '', ''));
  };

  // 전단지 수정하기
  const goEdit = () => {
    navigate(ROUTES.POSTING + `?postId=${postId}`);
  };

  // 사용자가 사진을 두 개 설정하면 사진 width를 반반씩 쪼갬
  const handleImgWidth = info?.imgSecond ? 'half' : '';

  const handleContact = () => {
    setOpenContact(!openContact);
  };

  // 사용자가 입력해둔 오픈채팅방 주소로 이동
  const handleOpenChat = () => {
    if (info?.kakaoUrl) window.open(info.kakaoUrl);
  };

  // 글쓴이가 입력해둔 이메일 주소 복사
  const handleCopyClipboard = async () => {
    if (info?.email) {
      await navigator.clipboard.writeText(info.email);
      alert('이메일 주소가 복사됐어요!');
    }
  };

  // 페이지 들어오면 top으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return {
    postId,
    rows,
    setRows,
    rowsBottom,
    setRowsBottom,
    openDots,
    openContact,
    handleBack,
    handleDots,
    handleContact,
    handleOpenChat,
    handleCopyClipboard,
    handleReport,
    handleBookmark,
    handleRemove,
    handleCategory,
    goCategory,
    goEdit,
    handleImgWidth,
    info,
  };
};

export default useGetFlyerDetail;
