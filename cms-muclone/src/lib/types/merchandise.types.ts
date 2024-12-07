export interface CreateMerchandiseState {
  message: string;
  status: boolean;
}

export interface MerchandiseList {
  id: string;
  name: string;
  description: string;
  slug: string;
  thumbnail: string;
  price: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
  Categories: Array<{
    id: string;
    name: string;
  }>;
  Images: Array<{
    id: string;
    url: string;
  }>;
}

export interface IMerchandise {
  id: string;
  name: string;
  description: string;
  slug: string;
  thumbnail: string;
  price: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
  Categories: Array<{
    id: string;
    name: string;
  }>;
  Images: Array<{
    id: string;
    url: string;
  }>;
}
