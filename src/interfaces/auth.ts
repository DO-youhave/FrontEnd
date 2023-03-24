export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface ExitResponse {
  code: string;
  msg: string;
  success: boolean;
}
