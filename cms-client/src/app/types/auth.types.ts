export interface LoginResponse {
  status: string;
  message: string;
  data: {
    access_token: string;
  };
}
