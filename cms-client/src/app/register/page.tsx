import Image from "next/image";
import RegisterForm from "@/components/Forms/RegisterForm";

export default function Register() {
  return (
    <main className="flex">
      <div className="flex-1 h-screen p-8 bg-white">
        <div className="rounded relative h-full overflow-hidden">
          <Image
            src="/banner2.webp"
            fill={true}
            objectFit="cover"
            alt="Login Banner"
          ></Image>
        </div>
      </div>
      <RegisterForm></RegisterForm>
    </main>
  );
}
