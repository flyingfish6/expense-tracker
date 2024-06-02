import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
const Header = () => {
  return (
    <div className="flex p-5 items-center justify-between border-b shadow-sm">
      <Image src="/logo.svg" alt="logo" width={160} height={100} />
      <Button>Get Start</Button>
    </div>
  );
};

export default Header;
