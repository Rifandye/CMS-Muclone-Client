import { z } from "zod";

export const createMerchandiseSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  slug: z.string().min(1, { message: "Slug is required" }),
  price: z.string().min(1, { message: "Price is required" }),
  stock: z.string().min(1, { message: "Stock is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  categories: z
    .array(z.string())
    .min(1, { message: "At least one category is required" }),
});
