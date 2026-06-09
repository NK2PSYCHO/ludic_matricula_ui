import { FunctionComponent } from "react";
import RegisterForm from "@/components/auth/RegisterForm";

const RegisterPage: FunctionComponent = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;