"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LoginResponse, RegisterResponse } from "../types/auth.types";

export async function LoginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

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

  const result: LoginResponse = await response.json();

  if (result.message === "error") {
    return;
  } else {
    (await cookies()).set(
      "Authorization",
      `Bearer ${result.data.access_token}`,
      {
        httpOnly: true,
      }
    );

    return redirect("/");
  }
}

export async function RegisterAction(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
    }
  );

  const result: RegisterResponse = await response.json();

  if (result.message === "error") {
  } else {
    return redirect("/login");
  }
}
