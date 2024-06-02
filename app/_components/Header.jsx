"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
const Header = () => {
  const router = useRouter();
  const { isSignedIn } = useUser();

  return (
    <div className="flex p-5 items-center justify-between border-b shadow-sm">
      <Image src="/logo.svg" alt="logo" width={160} height={100} />
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href="sign-in">
          <Button>Get Start</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
