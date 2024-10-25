import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { red } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { RegisterResponse } from "../types/auth.types";

export default function Register() {
  const handleRegister = async (formData: FormData) => {
    "use server";

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
    }

    return redirect("/login");
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
        action={handleRegister}
        className="flex-1 p-8 h-screen bg-white flex flex-col justify-evenly"
      >
        <Image
          src="/reddevils.png"
          width={25}
          height={25}
          alt="Mu logo"
        ></Image>
        <div className="flex flex-col gap-1">
          <p className="text-black text-2xl">Hi Reds!</p>
          <p className="text-black text-sm opacity-50">
            Registering for Content Management System. You Need The Approval of
            Super-Admin, It may take a while.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-black">First Name</p>
            <TextField
              id="firstName"
              name="firstName"
              variant="outlined"
              color="error"
              size="small"
              hiddenLabel
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-black">Last Name</p>
            <TextField
              id="lastName"
              name="lastName"
              variant="outlined"
              color="error"
              size="small"
              hiddenLabel
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-black">Email</p>
            <TextField
              id="email"
              name="email"
              variant="outlined"
              color="error"
              size="small"
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
              size="small"
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
            Register
          </Button>
          <p className="text-center text-black">
            Already Have an Account?
            <Link href="/login">
              <span className="underline cursor-pointer">Login</span>
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}
