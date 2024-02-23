import Image, { StaticImageData } from "next/image";
import backgroudDefaultImage from "@/public/img/auth/2.jpg";
import Logo from "@/public/img/logo.svg";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { ModeToggle } from "../theme-toggle";
interface RegisterLayoutType {
  description?: string;
  subSlogan?: string;
  children: React.ReactNode;
  backgroudImage?: StaticImageData;
}
export const AuhLayout = ({
  children,
  backgroudImage,
  description,
  subSlogan,
}: RegisterLayoutType) => {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 ">
      <div className="absolute right-4 top-4 z-50 md:right-8 md:top-8">
        <ModeToggle />
      </div>

      <div className=" sticky top-0 hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <Image
          priority
          className="absolute  inset-0 h-full w-full  object-cover"
          src={backgroudImage || backgroudDefaultImage}
          alt="Crypto Platform"
          placeholder="blur"
          fill
        />
        <div className=" absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent"></div>
        <div className="relative z-20 flex items-center space-x-1 text-lg font-medium">
          <div>Crypto Platform</div>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">&ldquo;{description}&rdquo;</p>
            <footer className="text-sm text-muted-foreground">
              {subSlogan}
            </footer>
          </blockquote>
        </div>
      </div>
      <ScrollArea className="flex h-full items-center justify-center px-4 lg:px-8  [&[data-radix-scroll-area-viewport]]:flex [&[data-radix-scroll-area-viewport]]:items-center [&[data-radix-scroll-area-viewport]]:justify-center">
        <div className="mt-8 p-1 ">{children}</div>
      </ScrollArea>
    </div>
  );
};
