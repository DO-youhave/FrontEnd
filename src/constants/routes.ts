export const ROUTES = {
  HOME: '/', // 메인 페이지
  STREET: (id: string) => `/street/${id}`, // 전단지 골목 페이지
  BOOKMARK: '/bookmark', // 북마크 페이지
  FLYER: '/flyer', // 전단지 상세 페이지
  POSTING: '/posting', // 전단지 등록 페이지
  EDITING: '/editing', // 전단지 수정 페이지
  MY_PAGE: '/mypage', // 마이 페이지
  RECENT_NOTIFICATION: '/mypage/recent', // 최근 알림 페이지
  MY_FLYER: '/mypage/flyer', // 내가 쓴 글 페이지
  MY_COMMENT: '/mypage/comment', // 내가 쓴 댓글 페이지
  EXIT: '/exit', // 탈퇴 페이지
  NOT_FOUND: '/not-found', // 404 페이지
};
