import { ResetForm } from "@/components/auth/reset-form";
import AuthenticationPage from "@/components/pages/register";

const ResetPage = () => {
  return (
    <AuthenticationPage heading="Reset Password" description="Enter your email">
      <ResetForm />
    </AuthenticationPage>
  );
};

export default ResetPage;
