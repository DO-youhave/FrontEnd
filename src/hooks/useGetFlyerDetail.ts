import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Bookmark, FlyerDetail, ReportDetail } from '../apis/FlyerDetail';
import { queryClient } from '../main';

const useGetFlyerDetail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [openDots, setOpenDots] = useState(false);
  const [openContact, setOpenContact] = useState(false);
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
  const handleContact = () => {
    setOpenContact(!openContact);
  };

  const handleOpenChat = () => {
    if (info?.kakaoUrl) window.open(info.kakaoUrl);
  };

  const handleCopyClipboard = async () => {
    if (info?.email) {
      await navigator.clipboard.writeText(info.email);
      alert('이메일 주소가 복사됐어요!');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   const getDetail = async () => {
  //     const detail = await FlyerDetail(postId);
  //     setInfo(detail);
  //   };
  //   getDetail();
  // }, []);

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
    info,
  };
};

export default useGetFlyerDetail;
