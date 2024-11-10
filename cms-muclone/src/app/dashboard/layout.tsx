import Navbar from "@/components/dashboard/ui/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="tw-h-screen tw-flex tw-flex-col">
        <section>
          <Navbar />
        </section>
        <section className="tw-bg-gray-300 tw-flex-1 tw-p-3">
          {children}
        </section>
      </main>
    </>
  );
}
