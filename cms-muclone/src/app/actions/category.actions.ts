"use server";

import { BaseApiResponse } from "@/lib/types/base.types";
import { CategoryList } from "@/lib/types/category.types";
import { cookies } from "next/headers";

export async function fetchCategories() {
  const cookieStore = await cookies();
  const authorization = cookieStore.get("Authorization");
  const token = authorization?.value.split(" ")[1];

  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/category", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data: BaseApiResponse<CategoryList[]> = await response.json();

  return data?.data;
}
