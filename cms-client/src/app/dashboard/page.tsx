import Image from "next/image";

export default function Dashboard() {
  return (
    <main className="bg-white h-full flex items-center justify-center text-black gap-5">
      <Image
        src="/reddevils.png"
        alt="Red Devils Logo"
        width={30}
        height={30}
      ></Image>
      <p>Welcome To The MU Clone CMS</p>
    </main>
  );
}
