import React, { useState } from "react";

const BudgetItem = ({ budget }) => {
  function calculateSum(obj) {
    if (obj.expenses && obj.expenses.length > 0) {
      const sum = obj.expenses.reduce((acc, curr) => {
        return acc + parseInt(curr.amount);
      }, 0);

      return sum;
    } else {
      return 0; // 如果数组为空或者未定义，则返回0
    }
  }
  const totalSum = calculateSum(budget);

  const present = (totalSum / parseInt(budget.amount)) * 100;
  //   console.log(present);
  const dynamicWidth = `${parseInt(present)}%`;
  console.log(dynamicWidth);
  return (
    <div className="p-5 border rounded-lg gap-2 hover:shadow-md cursor-pointer">
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-2 items-center">
          <h2 className="text-2xl p-2 px-4 bg-slate-100 rounded-full">
            {budget.icon}
          </h2>
          <div>
            <h2 className="font-bold">{budget.amount}</h2>
            <h2 className="text-sm text-gray-400">{totalSum} Item</h2>
          </div>
        </div>
        <h2 className="font-bold text-xl text-primary">￥{budget.amount}</h2>
      </div>
      <div className="mt-5 ">
        <div className="flex justify-between">
          <h2 className="text-xs text-slate-400">{totalSum}￥</h2>
          <h2 className="text-xs text-slate-400">{budget.amount}￥</h2>
        </div>

        <div className="w-full h-2 rounded-full bg-slate-300">
          <div
            style={{ width: `${dynamicWidth}` }}
            className={`h-2 rounded-full bg-primary`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BudgetItem;
