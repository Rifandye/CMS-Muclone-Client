"use server";

import { BaseApiResponse } from "@/lib/types/base.types";
import { MerchandiseList } from "@/lib/types/merchandise.types";
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
