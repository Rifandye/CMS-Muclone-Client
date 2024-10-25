export interface LoginResponse {
  status: string;
  message: string;
  data: {
    access_token: string;
  };
}

export interface RegisterResponse {
  status: string;
  message: string;
  data: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  };
}
