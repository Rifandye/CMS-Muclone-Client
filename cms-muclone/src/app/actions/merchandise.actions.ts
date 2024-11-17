"use server";

import { BaseApiResponse } from "@/lib/types/base.types";
import {
  CreateMerchandiseState,
  MerchandiseList,
} from "@/lib/types/merchandise.types";
import { cookies } from "next/headers";

export async function fetchMerchandises() {
  const cookieStore = await cookies();
  const authorization = cookieStore.get("Authorization");
  const token = authorization?.value.split(" ")[1];

  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/merchandise",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data: BaseApiResponse<MerchandiseList[]> = await response.json();

  return data?.data;
}

export async function createMerchandise(
  prevState: CreateMerchandiseState,
  formData: FormData
) {
  const cookieStore = await cookies();
  const authorization = cookieStore.get("Authorization");
  const token = authorization?.value.split(" ")[1];

  const name = formData.get("name");
  const price = formData.get("price");
  const stock = formData.get("stock");
  const description = formData.get("description");
  const categories = formData.getAll("categories");

  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/merchandise",

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, price, stock, description, categories }),
    }
  );

  await response.json();

  if (!response.ok) {
    return {
      ...prevState,
      message: "Invalid Email/Password",
      status: true,
    };
  }

  return {
    ...prevState,
    message: "Merchandise created successfully!",
    status: true,
  };
}
