import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ServerProtectedComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = (await cookies()).get("Authorization")?.value;

  if (!token) {
    redirect("/login");
  }

  return <>{children}</>;
}
