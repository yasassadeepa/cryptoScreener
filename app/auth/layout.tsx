import { AuhLayout } from "@/components/layout/auth";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuhLayout
      description="
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Dolores, voluptatibus natus atque  numquam expedita porro
  neque mollitia. "
      subSlogan="Crypto Platform"
    >
      {children}
    </AuhLayout>
  );
};

export default AuthLayout;
