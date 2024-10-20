"use client";

import Image from "next/image";
import { useState } from "react";

export default function SideBar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      className={`bg-white h-screen flex flex-col transition-all duration-300 rounded-tr-2xl rounded-br-2xl shadow-lg  ${
        isHovered ? "w-64" : "w-16"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex p-3 gap-5 items-center bg-red-800`}>
        <Image
          src="/reddevils.png"
          height={30}
          width={30}
          alt="Manchester United Logo"
        ></Image>
        <p
          className={`transition-opacity duration-300 text-sm font-semibold ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          Content Management System
        </p>
      </div>
    </aside>
  );
}
