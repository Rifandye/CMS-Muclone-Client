import Navbar from "@/components/dashboard/ui/Navbar";
import SideBar from "@/components/dashboard/ui/SideBar";
import ServerProtectedComponent from "@/components/Protector/ServerProtectedComponent";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ServerProtectedComponent>
        <main className="tw-h-screen tw-flex">
          <section className="">
            <SideBar />
          </section>
          <div className="tw-flex-1 tw-flex tw-flex-col tw-overflow-auto">
            <section className="tw-bg-white tw-shadow-md">
              <Navbar />
            </section>
            <section className="tw-bg-gray-300 tw-flex-1 tw-p-5">
              {children}
            </section>
          </div>
        </main>
      </ServerProtectedComponent>
    </>
  );
}
