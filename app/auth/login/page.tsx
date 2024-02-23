import { LoginForm } from "@/components/auth/login-form";
import AuthenticationPage from "@/components/pages/register";

const LoginPage = () => {
  return (
    <AuthenticationPage
      heading="Welcome Back"
      description="Enter your details to get signin to your account"
    >
      <LoginForm />
    </AuthenticationPage>
  );
};

export default LoginPage;
