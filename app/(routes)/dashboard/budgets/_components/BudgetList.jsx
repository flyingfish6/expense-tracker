"use client";
import React, { useEffect, useState } from "react";
import CreateBudget from "./CreateBudget";
import GlobalApi from "../../../../server/GlobalApi";
import BudgetItem from "./BudgetItem";
const BudgetList = ({ email }) => {
  const [budgetsList, setBudgetList] = useState([]);
  const getBudgetList = () => {
    GlobalApi.GetBudgetSpend().then((resp) => {
      setBudgetList(resp.data);
    });
  };
  useEffect(() => {
    getBudgetList();
  }, []);
  // console.log(budgetsList);
  return (
    <div className="mt-5">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <CreateBudget getBudgetList={getBudgetList} email={email} />
        {budgetsList?.length > 0
          ? budgetsList.map((budget, index) => (
              <div key={index}>
                <BudgetItem budget={budget} />
              </div>
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="w-full bg-slate-200 rounded-lg h-[150px] animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
};

export default BudgetList;
