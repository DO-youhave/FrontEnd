import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { FlyerDetail } from '../apis/FlyerDetail';
import { FlyerInfo } from '../interfaces/flyerDetail';

const tags = ['#운동화', '#나이키', '#맥북'];

const useGetFlyerDetail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [rows, setRows] = useState(false);
  const [rowsBottom, setRowsBottom] = useState(false);
  const [openDots, setOpenDots] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [info, setInfo] = useState<FlyerInfo>();
  const id = Number(searchParams.get('id'));
  console.log(id);

  console.log(info);

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
    window.open('');
  };
  const handleCopyClipboard = () => {
    const email = 'aaaaa';
    navigator.clipboard.writeText(email);
    alert('이메일 주소가 복사됐어요!');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getDetail = async () => {
      const detail = await FlyerDetail(id);
      setInfo(detail);
    };
    getDetail();
  }, []);

  return {
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
    tags,
    info,
  };
};

export default useGetFlyerDetail;
