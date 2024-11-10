"use client";

import { login } from "@/app/actions/auth.action";
import { LoginState } from "@/lib/types/auth.types";
import { LoadingButton } from "@mui/lab";
import { Checkbox, FormControlLabel, Snackbar, TextField } from "@mui/material";
import { red } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";

const initialState: LoginState = {
  message: "",
  status: false,
};

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState<LoginState, FormData>(
    login,
    initialState
  );

  return (
    <form
      action={formAction}
      className="tw-flex tw-flex-col tw-gap-5 tw-justify-evenly tw-h-full"
    >
      <div className="tw-flex tw-flex-col tw-gap-3">
        <Image
          src="/reddevils.png"
          width={25}
          height={25}
          alt="Red Devils Logo"
        />
        <div className="tw-flex tw-flex-col tw-gap-1">
          <p className="tw-text-2xl">Welcome Back</p>
          <p className="tw-text-sm tw-opacity-50">
            This Website allow you to manage the content that displayed in MU
            Clone Public Website
          </p>
        </div>
      </div>
      {state?.message && <p className="tw-text-red-500">{state?.message}</p>}
      <div className="tw-flex tw-flex-col tw-gap-4">
        <div className="tw-flex tw-flex-col tw-gap-1">
          <p className="text-black">Email</p>
          <TextField
            id="email"
            name="email"
            variant="outlined"
            color="error"
            hiddenLabel
          />
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1">
          <p className="text-black">Password</p>
          <TextField
            id="password"
            name="password"
            variant="outlined"
            type="password"
            color="error"
            hiddenLabel
          />
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-items-center">
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
      <div className="tw-flex tw-flex-col tw-gap-3 ">
        <LoadingButton
          disabled={isPending}
          type="submit"
          variant="contained"
          color="error"
          loading={isPending}
        >
          Login
        </LoadingButton>
        <p className="tw-text-center tw-text-black">
          Don&apos;t Have an Account?{" "}
          <Link href="/register">
            <span className="tw-underline tw-cursor-pointer">Register</span>
          </Link>
        </p>
      </div>
      {state?.message && (
        <Snackbar
          open={!!state?.status}
          autoHideDuration={5000}
          message={state?.message}
        />
      )}
    </form>
  );
}
