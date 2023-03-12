import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { FlyerDetail } from '../apis/FlyerDetail';
import { FlyerInfo } from '../interfaces/flyerDetail';

const useGetFlyerDetail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [openDots, setOpenDots] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [info, setInfo] = useState<FlyerInfo>(); // 전단지 상세 정보(댓글 제외)
  const [rows, setRows] = useState(false); // 댓글(parent) 입력 창(상) on, off
  const [rowsBottom, setRowsBottom] = useState(false); // 댓글(parent) 입력 창(하) on, off
  const postId = Number(searchParams.get('id'));

  const handleBack = () => {
    navigate(-1);
  };
  const handleDots = () => {
    setOpenDots(!openDots);
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

  useEffect(() => {
    const getDetail = async () => {
      const detail = await FlyerDetail(postId);
      setInfo(detail);
    };
    getDetail();
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
    info,
  };
};

export default useGetFlyerDetail;
