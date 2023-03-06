export const API_URLS = {
  AUTH: {
    REFRESH: '/auth/token-refresh', // 토큰 리프레시
  },
  MAIN: {
    COUNT: '/users', // 메인 카운트
    POSTS: '/users/list', // 전단지 리스트
    TAGS: '/users/list/top', // 태그 리스트
  },
  USER: {
    KAKAO_LOGIN: '/users/kakao-login', // 카카오 로그인
    NAVER_LOGIN: '/users/naver-login', // 네이버 로그인
    LOGOUT: '/users/logout', // 로그아웃
    RESIGN: '/users/resign', // 회원탈퇴
    PROFILE: '/users/profile', // 프로필
    MYPAGE: {
      MARK: '/users/mypage/marks', // 북마크
      NOTIFICATION: '/users/mypage/notifications', // 최근 알림
      POST: '/users/mypage/posts', // 내가 붙인 전단지
      COMMENT: '/users/mypage/comments', // 내가 작성한 댓글
    },
  },
  POST: {
    REGISTER: '/users/posts', // 전단지 등록
    DETAIL: (id: number) => `/users/posts/${id}`, // 전단지 상세
    DELETE: (id: number) => `/users/posts/${id}`, // 전단지 삭제
    BOOKMARK: (id: number) => `/users/posts/${id}`, // 전단지 북마크
    GETEDIT: (id: number) => `/users/posts/${id}/edit`, // 전단지 수정 정보 조회
    EDIT: (id: number) => `/users/posts/${id}/edit`, // 전단지 수정
    REPORT: (id: number) => `/users/posts/${id}/report`, // 전단지 신고
  },
  COMMENT: {
    REGISTER: (id: number) => `/users/posts/${id}`, // 댓글 작성
    EDIT: (postId: number, commentId: number) =>
      `/users/posts/${postId}/${commentId}`, // 댓글 수정
    DELETE: (postId: number, commentId: number) =>
      `/users/posts/${postId}/${commentId}`, // 댓글 삭제
    LIST: (id: number) => `/users/posts/${id}/comments`, // 댓글 리스트
  },
};
