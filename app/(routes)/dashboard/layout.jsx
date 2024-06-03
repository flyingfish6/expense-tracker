"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./_components/Sidebar";
import DashboardHeader from "./_components/DashboardHeader";
import prisma from "../../../prisma/client";
import { useRouter } from "next/navigation";
import GlobalApi from "../../server/GlobalApi";
const DashboardLayout = ({ children }) => {
  const [budgets, setBudgets] = useState([]);
  const router = useRouter();
  const checkBudgets = async () => {
    GlobalApi.GetAllBudgets().then((resp) => {
      setBudgets(resp.data);
      // console.log(resp.data);
      if (resp.data.length === 0) {
        router.push("/dashboard/budgets");
      }
    });
  };

  useEffect(() => {
    checkBudgets();
  }, []);

  return (
    <div>
      <div className="fixed md:w-64 hidden md:block">
        <Sidebar />
      </div>
      <div className="md:ml-64">
        <DashboardHeader />

        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
