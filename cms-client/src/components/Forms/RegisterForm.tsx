import { RegisterAction } from "@/app/actions/AuthActions";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { red } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <form
      action={RegisterAction}
      className="flex-1 p-8 h-screen bg-white flex flex-col justify-evenly"
    >
      <Image src="/reddevils.png" width={25} height={25} alt="Mu logo"></Image>
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
  );
}
