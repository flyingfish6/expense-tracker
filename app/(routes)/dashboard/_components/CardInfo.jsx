import { PiggyBank, ReceiptText, Wallet } from "lucide-react";
import React, { useEffect, useState } from "react";

const CardInfo = ({ budgetsList }) => {
  let totalBudget = 0;
  let totalSpend = 0;
  let length = budgetsList?.length;
  if (budgetsList?.length > 0) {
    budgetsList.forEach((budget) => {
      totalBudget += parseInt(budget.amount);
    });
    // setTotalBudget(sum);
  }
  if (budgetsList?.length > 0) {
    budgetsList.forEach((budget) => {
      budget.expenses.forEach((expense) => {
        totalSpend += parseInt(expense.amount);
        // console.log(expense);
      });
    });
  }
  //   console.log(budgetsList);
  console.log(totalSpend);

  return (
    <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <div className="p-7 border rounded-lg flex items-center justify-between">
        <div className="">
          <h2 className="text-sm">Total Budget</h2>
          <h2 className="font-bold text-2xl">${totalBudget}</h2>
        </div>
        <PiggyBank className="bg-primary text-white p-3 rounded-full w-12 h-12" />
      </div>
      <div className="p-7 border rounded-lg flex items-center justify-between">
        <div className="">
          <h2 className="text-sm">Total Spend</h2>
          <h2 className="font-bold text-2xl">${totalSpend}</h2>
        </div>
        <ReceiptText className="bg-primary text-white p-3 rounded-full w-12 h-12" />
      </div>
      <div className="p-7 border rounded-lg flex items-center justify-between">
        <div className="">
          <h2 className="text-sm">No. of Budget</h2>
          <h2 className="font-bold text-2xl">${length}</h2>
        </div>
        <Wallet className="bg-primary text-white p-3 rounded-full w-12 h-12" />
      </div>
    </div>
  );
};

export default CardInfo;
