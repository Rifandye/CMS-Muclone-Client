export interface LoginState {
  message: string;
  status: boolean;
}

export interface LoginResponse {
  access_token: string;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
}
