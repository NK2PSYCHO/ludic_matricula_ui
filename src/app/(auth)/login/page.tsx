import { FunctionComponent } from "react";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage: FunctionComponent = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
