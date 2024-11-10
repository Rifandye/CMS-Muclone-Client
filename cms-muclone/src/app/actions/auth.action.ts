"use server";

import { LoginResponse, LoginState } from "@/lib/types/auth.types";
import { BaseApiResponse } from "@/lib/types/base.types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(prevState: LoginState, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  const result: BaseApiResponse<LoginResponse> = await response.json();

  if (!response.ok) {
    return {
      ...prevState,
      message: "Invalid Email/Password",
      status: true,
    };
  }

  (await cookies()).set("Authorization", `Bearer ${result.data.access_token}`);

  redirect("/dashboard");
}
