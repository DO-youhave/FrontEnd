export const ROUTES = {
  HOME: '/', // 메인 페이지
  STREET: (id: string) => `/street/${id}`, // 전단지 골목 페이지
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
};
