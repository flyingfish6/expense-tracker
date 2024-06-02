import React from "react";
import CreateBudget from "./CreateBudget";

const BudgetList = ({ email }) => {
  return (
    <div className="mt-5">
      <div className="grid sm:grid-cols-1 ">
        <CreateBudget email={email} />
      </div>
    </div>
  );
};

export default BudgetList;
