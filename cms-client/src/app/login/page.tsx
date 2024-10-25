import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import Image from "next/image";
import { redirect } from "next/navigation";
import { LoginResponse } from "../types/auth.types";
import { cookies } from "next/headers";
import { red } from "@mui/material/colors";
import Link from "next/link";

export default function Login() {
  const handleLogin = async (formData: FormData) => {
    "use server";
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
    }

    cookies().set("Authorization", `Bearer ${result.data.access_token}`, {
      httpOnly: true,
    });

    return redirect("/");
  };
  return (
    <main className="flex">
      <div className="flex-1 h-screen p-8 bg-white">
        <div className="rounded relative h-full overflow-hidden">
          <Image
            src="/banner2.webp"
            fill={true}
            objectFit="cover"
            alt="Login Banner"
          ></Image>
        </div>
      </div>
      <form
        className="flex-1 p-8 h-screen bg-white flex flex-col justify-evenly"
        action={handleLogin}
      >
        <Image
          src="/reddevils.png"
          width={25}
          height={25}
          alt="Mu logo"
        ></Image>
        <div className="flex flex-col gap-1">
          <p className="text-black text-2xl">Welcome Back</p>
          <p className="text-black text-sm opacity-50">
            This Website allow you to manage the content that displayed in MU
            Clone Public Website
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-black">Email</p>
            <TextField
              id="email"
              name="email"
              variant="outlined"
              color="error"
              hiddenLabel
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-black">Password</p>
            <TextField
              id="password"
              name="password"
              variant="outlined"
              color="error"
              type="password"
              hiddenLabel
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  "&.Mui-checked": {
                    color: red[600],
                  },
                }}
              />
            }
            label={<span className="text-black">Remember Me</span>}
          />
          <p className="text-black">Forgot Password</p>
        </div>
        <div className="flex flex-col gap-3 ">
          <Button type="submit" variant="contained" color="error">
            Login
          </Button>
          <p className="text-center text-black">
            Don&apos;t Have an Account?{" "}
            <Link href="/register">
              <span className="underline cursor-pointer">Register</span>
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}
