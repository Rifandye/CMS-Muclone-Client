import { Divider } from "@mui/material";
import Image from "next/image";

export default function Dashboard() {
  return (
    <main className="tw-flex tw-flex-col tw-gap-10 tw-items-center tw-justify-center">
      <div className="tw-flex tw-items-center tw-gap-4">
        <Image
          src="/reddevils.png"
          width={25}
          height={25}
          alt="Red Devils Logo"
        />
        <Divider orientation="vertical" flexItem />
        <p>Welcome To Content Management System - MU Clone</p>
      </div>
    </main>
  );
}
