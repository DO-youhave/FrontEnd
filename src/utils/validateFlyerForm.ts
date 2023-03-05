import { CategoryName } from '../constants/categorys';

// 공백확인 함수
export const checkExistData = (value: string, dataName: string) => {
  if (value === '') {
    alert(dataName + ' 입력해주세요!');
    return false;
  }
  return true;
};

// 카테고리 유효성 검사: 필수로 체크해야 함
export const checkCategory = (category: undefined | CategoryName) => {
  if (category === undefined || category === '전체') {
    alert('카테고리를 설정해주세요.');
    return false;
  }
  return true;
};

// 제목 유효성 검사: 공백 금지, 7자 이상 30자 이하
export const checkTitle = (title: string) => {
  if (!checkExistData(title, '제목을')) return false;
  if (title.length < 7) {
    alert('제목을 7자 이상으로 작성해주세요 😥');
    return false;
  }
  return true;
};

// 본문 유효성 검사: 공백 금지, 최대 1000자
export const checkMainText = (mainText: string) => {
  if (!checkExistData(mainText, '본문을')) return false;
  return true;
};

// 태그 입력 유효성 검사: 최소 한 개의 태그 설정해야 함.
export const checkTags = (tag: string[]) => {
  if (tag.length === 0) {
    alert('최소 한 개의 태그를 설정해주세요 😥');
    return false;
  }
  return true;
};

// 연락수단 유효성 검사: 최소 한 개의 연락수단을 설정해야 함.
export const checkContact = (contact: string[]) => {
  if (contact.length === 0) {
    alert('최소 한 개의 연락 수단을 설정해주세요 😥');
    return false;
  }
  return true;
};

// 카카오톡 오픈채팅 주소 유효성 검사: 공백 금지, https://open.kakao.com/... 형식
export const checkChattingUrl = (url: string) => {
  if (url.length === 0) {
    alert('오픈채팅방 주소를 입력해주세요.');
    return false;
  }
  const urlForm = /^(https:\/\/)(open)(\.)(kakao)(\.)(com)(\/)([a-zA-z0-9])/g;
  if (!urlForm.test(url)) {
    alert('유효한 오픈채팅 주소가 아니에요 😥');
    return false;
  }
  return true;
};

// 이메일 주소 유효성 검사: 공백 금지, 올바른 이메일 형식
export const checkEmailUrl = (url: string) => {
  if (url.length === 0) {
    alert('이메일 주소를 입력해주세요.');
    return false;
  }
  const urlForm =
    /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
  if (!urlForm.test(url)) {
    alert('유효한 이메일 주소가 아니에요 😥');
    return false;
  }
  return true;
};
