"use client";
import { LogoutButton } from "@/components/auth/logout-button";
import { UserButton } from "@/components/auth/user-button";
import { ModeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useSession } from "next-auth/react";
import React from "react";
import { FaUser } from "react-icons/fa";

const Dashboard = () => {
  const user = useCurrentUser();
  return (
    <div className="flex flex-col">
      {/* <UserButton /> */}
      <div className="my-2">
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-primary">
            <FaUser className="text-background" />
          </AvatarFallback>
        </Avatar>
      </div>
      <h1 className="text-2xl">Welcome, {user?.name}</h1>
      <h1>{user?.email}</h1>

      <div className="bg-foreground w-fit px-2 rounded-lg text-background text-sm my-4 font-semibold">
        <LogoutButton>Logout</LogoutButton>
      </div>
    </div>
  );
};

export default Dashboard;
