export interface BaseApiResponse<T = unknown> {
  status: string;
  message: string;
  data: T | T[];
}

export interface TableHeader {
  name: string;
  key: string;
  align: "center" | "left" | "right" | "inherit" | "justify";
}
