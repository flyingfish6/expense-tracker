"use client";

import React, { useState } from "react";
import { Input } from "../../../../../components/ui/input";
import { Button } from "../../../../../components/ui/button";
import moment from "moment";
import GlobalApi from "../../../../server/GlobalApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const AddExpense = ({ id }) => {
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const createAt = moment(new Date()).format("YYYY-MM-DD");
  // console.log(createAt);
  const router = useRouter();
  const addExpense = () => {
    GlobalApi.CreateExpense(id, name, amount, createAt).then((resp) => {
      if (resp) {
        toast("add expense successfully!");
        router.push("/dashboard/budgets");
      }
    });
  };
  return (
    <div className="border p-5 rounded-lg">
      <h2 className="font-bold text-lg">Add Expense</h2>
      <div className="mt-2">
        <h2 className="text-black font-medium my-1">Expense Name</h2>
        <Input
          placeholder="bugdet name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="mt-2">
        <h2 className="text-black font-medium my-1">Expense Amount</h2>
        <Input
          placeholder="bugdet amount"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>
      <Button
        disabled={!name || !amount}
        onClick={() => {
          addExpense();
        }}
        className="mt-5 w-full"
      >
        Add New Expense
      </Button>
    </div>
  );
};

export default AddExpense;
