import React from "react";
import BudgetList from "./_components/BudgetList";
import { currentUser } from "@clerk/nextjs/server";
// import { useUser } from "@clerk/clerk-react";

const BudgetsPage = async () => {
  //   const user = useUser();
  const user = await currentUser();
  const email = user.emailAddresses[0].emailAddress;
  return (
    <div className="p-5">
      <h2 className="font-bold text-2xl">BudgetsPage</h2>
      <div>
        <BudgetList email={email} />
      </div>
    </div>
  );
};

export default BudgetsPage;
