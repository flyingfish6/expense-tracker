"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import CardInfo from "./_components/CardInfo";
import GlobalApi from "../../server/GlobalApi";
import Barchart from "./_components/Barchart";
import BudgetItem from "./budgets/_components/BudgetItem";
import ExpenseList from "./expenses/_components/ExpenseList";
const DashboardPage = ({ params }) => {
  const [budgetsList, setBudgetsList] = useState();
  const [expenses, setExpenses] = useState();
  const { user } = useUser();
  const getBudgetsList = () => {
    GlobalApi.GetBudgetSpend().then((resp) => {
      // console.log(resp.data);
      if (resp) {
        setBudgetsList(resp.data);
      }
    });
  };
  const getExpenses = () => {
    GlobalApi.GetExpensesList().then((resp) => {
      if (resp) {
        setExpenses(resp.data);
        console.log(resp.data);
      }
    });
  };
  const getBudgetById = () => {};
  useEffect(() => {
    getBudgetsList();
    getExpenses();
  }, []);
  // console.log(budgetsList);
  return (
    <div>
      <div className="p-5">
        <h2 className="font-bold text-2xl">Hi! {user?.fullName}</h2>
        <CardInfo budgetsList={budgetsList} />
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-2">
            <Barchart budgetsList={budgetsList} />
            <ExpenseList
              expenses={expenses}
              getExpenses={getExpenses}
              getBudgetById={getBudgetById}
            />
          </div>
          <div className="">
            {budgetsList?.map((budget, index) => (
              <BudgetItem budget={budget} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
