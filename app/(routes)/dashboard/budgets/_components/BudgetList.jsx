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
  console.log(budgetsList);
  return (
    <div className="mt-5">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <CreateBudget getBudgetList={getBudgetList} email={email} />
        {budgetsList.map((budget, index) => (
          <div key={index}>
            <BudgetItem budget={budget} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetList;
