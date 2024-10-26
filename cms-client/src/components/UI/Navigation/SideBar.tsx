"use client";

import Image from "next/image";
import { useState } from "react";
import NavigationButton from "../Buttons/NavigationsButton";

export default function SideBar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white text-black sticky h-screen transition-all duration-300 flex flex-col overflow-hidden shadow-lg border-r border-gray-300 ${
        isHovered ? "w-64" : "w-16"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-red-800 p-4 flex items-center h-20 gap-5">
        <Image
          src="/reddevils.png"
          alt="Red Devils Logo"
          width={25}
          height={25}
        />
        <p
          className={`text-xs font-semibold transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{ display: isHovered ? "block" : "none" }}
        >
          Content Management System
        </p>
      </div>
      <div className="flex flex-col p-2">
        <NavigationButton title="Store" isHovered={isHovered} />
      </div>
    </div>
  );
}
