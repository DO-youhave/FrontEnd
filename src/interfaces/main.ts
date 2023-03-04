export interface FlyerCountResponse {
  code: string;
  data: {
    allCount: number;
    todayCount: number;
  };
  msg: string;
  success: boolean;
}
