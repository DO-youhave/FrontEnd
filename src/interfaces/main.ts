export interface FlyerCountResponse {
  code: string;
  data: {
    allCount: number;
    todayCount: number;
  };
  msg: string;
  success: boolean;
}

export interface Flyer {
  postId: number;
  title: string;
  categoryKeyword: string;
  tags: string[];
  imgUrl: string | null;
}

export interface FlyerListResponse {
  code: string;
  pageData: {
    content: Flyer[];
    totalPages: number;
    totalElements: number;
    last: boolean;
  };
}
