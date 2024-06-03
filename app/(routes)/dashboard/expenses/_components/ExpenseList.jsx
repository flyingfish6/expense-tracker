import React from "react";
import { Trash } from "lucide-react";
import GlobalApi from "../../../../server/GlobalApi";
import { toast } from "sonner";
const ExpenseList = ({ expenses, getExpenses, getBudgetById }) => {
  console.log(expenses);
  const delExpense = (id) => {
    GlobalApi.DelExpense(id).then((resp) => {
      if (resp) {
        getExpenses();
        getBudgetById();
        toast("delete enxpense successfully!");
      }
    });
  };
  return (
    <div className="mt-5">
      <h2 className="mt-2 font-medium text-2xl">Expenses List</h2>
      <div className="bg-slate-200 rounded-lg">
        <div className="grid grid-cols-4 bg-slate-300 p-2">
          <h2 className="font-bold">Name</h2>
          <h2 className="font-bold">Amount</h2>
          <h2 className="font-bold">Date</h2>
          <h2 className="font-bold">Action</h2>
        </div>
        {expenses?.length > 0 &&
          expenses.map((expense, index) => (
            <div key={index} className="grid  grid-cols-4  p-2">
              <h2>{expense.name}</h2>
              <h2>{expense.amount}</h2>
              <h2>{expense.createAt}</h2>
              <h2>
                <Trash
                  onClick={() => delExpense(expense.id)}
                  className="text-red-600"
                />
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExpenseList;
