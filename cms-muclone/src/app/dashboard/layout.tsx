import BasePage from "@/components/BasePage";
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
            <section className="tw-flex-1 tw-p-3">
              <BasePage>{children}</BasePage>
            </section>
          </div>
        </main>
      </ServerProtectedComponent>
    </>
  );
}
