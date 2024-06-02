import { UserButton } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const DashboardHeader = () => {
  const pathname = usePathname();
  //   console.log(pathname);
  return (
    <div className="flex justify-between  items-center p-5 border-b shadow-sm">
      <Link
        href={`${
          pathname === "/dashboard" ? "/dashboard/budgets" : "/dashboard"
        }`}
      >
        search
      </Link>
      <div>
        <UserButton />
      </div>
    </div>
  );
};

export default DashboardHeader;
