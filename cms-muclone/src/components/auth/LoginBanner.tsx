import Image from "next/image";

export default function LoginBanner() {
  return (
    <Image
      src="/banner1.webp"
      alt="Login Banner"
      fill={true}
      objectFit="cover"
    ></Image>
  );
}
