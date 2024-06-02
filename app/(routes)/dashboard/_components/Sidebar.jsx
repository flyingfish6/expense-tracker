"use client";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/enpenses",
    },
    {
      id: 4,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];
  const pathname = usePathname();
  return (
    <div className="border-l shadow-md h-screen p-5">
      <Image src="/logo.svg" alt="logo" width={160} height={100} />
      <div className="mt-4">
        {menuList.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <h2
              className={`${
                pathname === menu.path ? "bg-blue-100 text-primary" : ""
              } flex gap-2 mb-2 items-center text-gray-500 font-medium p-5 cursor-pointer rounded-md hover:text-primary hover:bg-blue-100`}
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className="fixed bottom-10 p-5 flex gap-2 items-center">
        <UserButton />
        Profile
      </div>
    </div>
  );
};

export default Sidebar;
