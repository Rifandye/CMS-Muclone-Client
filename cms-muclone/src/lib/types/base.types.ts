export interface BaseApiResponse<T = unknown> {
  status: string;
  message: string;
  data: T;
}
