"use server";

import {
  BaseApiResponse,
  BasePaginationResponse,
  InitialState,
} from "@/lib/types/base.types";
import { CategoryList } from "@/lib/types/category.types";
import { createCategorySchema } from "@/lib/utils/validationSchema";

import { cookies } from "next/headers";

export async function fetchCategories(page: number, pageSize: number) {
  const cookieStore = await cookies();
  const authorization = cookieStore.get("Authorization");
  const token = authorization?.value.split(" ")[1];

  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL +
      `/category?page=${page}&size=${pageSize}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data: BaseApiResponse<BasePaginationResponse<CategoryList[]>> =
    await response.json();

  return data?.data;
}

export async function fetchCategorySelection() {
  const cookieStore = await cookies();
  const authorization = cookieStore.get("Authorization");
  const token = authorization?.value.split(" ")[1];

  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + `/category/selection`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data: BaseApiResponse<CategoryList[]> = await response.json();

  return data?.data;
}

export async function createCategory(
  prevState: InitialState,
  formData: FormData
) {
  const cookieStore = await cookies();
  const authorization = cookieStore.get("Authorization");
  const token = authorization?.value.split(" ")[1];

  const name = formData.get("name");

  const payload = {
    name,
  };

  const validatedFields = createCategorySchema.safeParse(payload);

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.errors
      .map((error) => error.message)
      .join(", ");

    return {
      message: errorMessages,
      success: false,
    };
  }

  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/category",

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
      }),
    }
  );

  const data = await response.json();

  if (data?.status !== "success") {
    return {
      message: "Creating Category Failed",
      status: false,
    };
  }

  return {
    message: "Category created successfully!",
    status: true,
  };
}
