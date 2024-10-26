import Image from "next/image";
import LoginForm from "@/components/Forms/LoginForm";

export default function Login() {
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
      <LoginForm></LoginForm>
    </main>
  );
}
