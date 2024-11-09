"use client";

import SideBar from "@/components/UI/Navigation/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <SideBar />
      <main className="flex-1 transition-all duration-300 bg-gray-100 p-10">
        {children}
      </main>
    </section>
  );
}
