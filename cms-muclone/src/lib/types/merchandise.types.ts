export interface MerchandiseList {
  id: string;
  name: string;
  description: string;
  slug: string;
  thumbnail: string;
  price: string;
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
