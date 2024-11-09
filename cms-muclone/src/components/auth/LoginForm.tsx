import Image from "next/image";

export default function LoginForm() {
  return (
    <div className="tw-flex tw-flex-col tw-gap-5">
      <Image
        src="/reddevils.png"
        width={25}
        height={25}
        alt="Red Devils Logo"
      />
      <div className="tw-flex tw-flex-col tw-gap-1">
        <p className="tw-text-2xl">Welcome Back</p>
        <p className="tw-text-sm tw-opacity-50">
          This Website allow you to manage the content that displayed in MU
          Clone Public Website
        </p>
      </div>
      <div>Form Section</div>
      <div>Button</div>
    </div>
  );
}
