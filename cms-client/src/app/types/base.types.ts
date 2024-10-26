export interface BaseApiResponse<T = unknown> {
  status: string;
  message: string;
  data: T | T[];
}

export interface TableHeaders {
  name: string;
}
