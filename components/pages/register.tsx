import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface AuthenticationPageType {
  backStep?: string;
  heading: string;
  description?: string;
  children: React.ReactNode;
}
export default function AuthenticationPage({
  heading,
  children,
  backStep,
  description,
}: AuthenticationPageType) {
  return (
    <div className="mx-auto flex w-full  flex-col justify-center  space-y-8 sm:w-[420px]">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">{heading}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="space-y-2 pb-8">
        {children}
        {backStep ? (
          <Link
            className={buttonVariants({ variant: "secondary", size: "full" })}
            href={backStep}
          >
            Back
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
