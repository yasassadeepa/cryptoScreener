import { RegisterForm } from "@/components/auth/register-form";
import AuthenticationPage from "@/components/pages/register";
const RegisterPage = () => {
  return (
    <AuthenticationPage
      heading="Create an account"
      description=" Enter your details to get signup as an escort"
    >
      <RegisterForm />
    </AuthenticationPage>
  );
};

export default RegisterPage;
