"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../../../server/GlobalApi";
import BudgetItem from "../../budgets/_components/BudgetItem";
import AddExpense from "../_components/AddExpense";
const ExpensesPage = ({ params }) => {
  const [budget, setBudget] = useState();
  const getBudgetById = () => {
    GlobalApi.GEtBudgetById(params.id).then((resp) => {
      console.log(resp.data);
      setBudget(resp.data);
    });
  };
  useEffect(() => {
    console.log(params);
    getBudgetById();
  }, []);
  return (
    <div className="p-10">
      <h2 className="font-bold text-2xl">My Expenses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5">
        {budget ? (
          <BudgetItem budget={budget} />
        ) : (
          <div className="h-[150px] w-full bg-slate-200 rounded-lg animate-pulse"></div>
        )}
        <AddExpense id={params.id} />
      </div>
    </div>
  );
};

export default ExpensesPage;
