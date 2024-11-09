import LoginBanner from "@/components/auth/LoginBanner";
import LoginForm from "@/components/auth/LoginForm";

export default function Login() {
  return (
    <main className="tw-flex tw-h-screen">
      <div className="tw-flex-1 tw-flex tw-items-center tw-justify-center">
        <div className="tw-h-[80%] tw-w-[80%] tw-rounded-lg tw-relative tw-overflow-hidden">
          <LoginBanner />
        </div>
      </div>
      <div className="tw-flex-1 tw-flex tw-items-center tw-justify-center">
        <div className="tw-h-[80%] tw-w-[80%] tw-rounded-lg tw-relative tw-overflow-hidden">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
