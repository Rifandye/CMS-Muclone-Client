export interface BaseApiResponse<T = unknown> {
  status: string;
  message: string;
  data: T;
}

export interface BasePaginationResponse<T = unknown> {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  data: T[];
}

export interface InitialState {
  message: string;
  success?: boolean;
}
