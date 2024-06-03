"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../../../server/GlobalApi";
import BudgetItem from "../../budgets/_components/BudgetItem";
import AddExpense from "../_components/AddExpense";
import ExpenseList from "../_components/ExpenseList";
import { Button } from "../../../../../components/ui/button";
import { PenBox, Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../../../components/ui/alert-dialog";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import EditBudget from "../_components/EditBudget";

const ExpensesPage = ({ params }) => {
  const [budget, setBudget] = useState();
  const [expenses, setExpenses] = useState();
  const router = useRouter();
  const getBudgetById = () => {
    GlobalApi.GEtBudgetById(params.id).then((resp) => {
      // console.log(resp.data);
      setBudget(resp.data);
    });
  };
  const getExpenses = () => {
    GlobalApi.GetExpenses(params.id).then((resp) => {
<<<<<<< HEAD
      // console.log(resp.data);
=======
      console.log(resp.data);
>>>>>>> 6151ac86b38e966d264bfaae4f7010b25286d0b1
      setExpenses(resp.data);
    });
  };
  const deleteBudget = () => {
    GlobalApi.DelBudget(params.id).then((resp) => {
      if (resp) {
        router.push("/dashboard/budgets");
        toast("delete budget successfully!");
      }
    });
  };
  useEffect(() => {
    // console.log(params);
    getBudgetById();
    getExpenses();
  }, []);
  return (
    <div className="p-10">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">My Expenses</h2>
        <span className="flex gap-2">
          <div className="flex gap-2 items-center">
            <EditBudget id={params.id} getBudgetById={getBudgetById} />
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="flex gap-2" variant="destructive">
                  <Trash /> Delete{" "}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your expense and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => deleteBudget()}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5">
        {budget ? (
          <BudgetItem budget={budget} />
        ) : (
          <div className="h-[150px] w-full bg-slate-200 rounded-lg animate-pulse"></div>
        )}
        <AddExpense id={params.id} />
      </div>
      <ExpenseList
        expenses={expenses}
        getExpenses={getExpenses}
        getBudgetById={getBudgetById}
      />
    </div>
  );
};

export default ExpensesPage;
