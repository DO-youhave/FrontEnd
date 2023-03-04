const naverClientId = import.meta.env.VITE_NAVER_CLIENT_ID;
const naverCallbackUrl = import.meta.env.VITE_NAVER_CALLBACK_URL;
const naverState = Math.random().toString(36).substring(3, 14);
const kakaoClientId = import.meta.env.VITE_KAKAO_CLIENT_ID;
const kakaoCallbackUrl = import.meta.env.VITE_KAKAO_CALLBACK_URL;

export const ROUTES = {
  HOME: '/', // 메인 페이지
  STREET: {
    ROOT: '/street', // 골목 페이지
    DETAIL: (category: string, tag: string, sort: string, value: string) =>
      `/street?category=${category}&tag=${tag}&sort=${sort}&q=${value}`, // 골목 상세 페이지
  }, // 전단지 골목 페이지
  FLYER: '/flyer', // 전단지 상세 페이지
  POSTING: '/posting', // 전단지 등록 페이지
  EDITING: '/editing', // 전단지 수정 페이지
  MY_PAGE: {
    ROOT: '/mypage', // 마이 페이지
    RECENT: 'recent', // 최근 본 전단지
    POSTING: 'posting', // 내가 쓴 글
    COMMENT: 'comment', // 내가 쓴 댓글
    BOOKMARK: 'bookmark', // 내가 찜한 북마크
    LOGOUT: 'logout', // 로그아웃
    EXIT: 'exit', // 회원 탈퇴
  },
  NOT_FOUND: '/not-found', // 404 페이지
  NAVER_LOGIN: `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientId}&state=${naverState}&redirect_uri=${naverCallbackUrl}`,
  KAKAO_LOGIN: `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}&redirect_uri=${kakaoCallbackUrl}&response_type=code`,
  NAVER_REDIRECT: '/user/naver-callback',
  KAKAO_REDIRECT: '/user/kakao-callback',
};
