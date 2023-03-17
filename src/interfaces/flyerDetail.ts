import { CategoryName } from './../constants/categorys';

export interface FlyerInfoResponse {
  code: string;
  data: FlyerInfo;
  msg: string;
  success: boolean;
}

export interface FlyerInfo {
  categoryKeyword: CategoryName;
  commentNum: number;
  contactWay: string;
  content: string;
  createdDate: string;
  email?: string;
  img?: string;
  imgSecond?: string;
  isWriter: boolean;
  kakaoUrl?: string;
  mark: false;
  markNum: number;
  postId: number;
  tags: string[];
  title: string;
  viewCount: number;
  writerId: number;
}
