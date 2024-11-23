"use client";

import Image from "next/image";
import { useState } from "react";
import NavigationButton from "../Navigation/NavigationButton";

export default function SideBar() {
  const [isHovered, setIsHovered] = useState(false);

  const storeContent = [
    {
      label: "Merchandise",
      route: "/dashboard/merchandise",
    },
    {
      label: "Category",
      route: "/dashboard/category",
    },
  ];

  return (
    <main
      className={`tw-h-screen tw-transition-all tw-duration-300 tw-shadow-tw-rounded-tr-xl tw-rounded-br-xl tw-rounded-tr-xl tw-overflow-hidden ${
        isHovered
          ? "tw-w-[300px] tw-flex tw-flex-col"
          : "tw-w-[80px] tw-flex tw-flex-col"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: "linear-gradient(to bottom, #f5f5f5, #eaeaea)",
        borderRight: "1px solid #ddd",
      }}
    >
      <div className="tw-bg-red-700 tw-h-16 tw-flex tw-items-center tw-justify-center">
        <Image
          src="/reddevils.png"
          width={25}
          height={25}
          alt="Red Devils Logo"
        />
      </div>
      <div className="tw-flex-1 tw-flex tw-flex-col tw-p-2">
        <NavigationButton
          title="Store"
          isHovered={isHovered}
          menuItems={storeContent}
        />
      </div>
    </main>
  );
}
