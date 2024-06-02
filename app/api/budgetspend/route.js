import { NextResponse } from "next/server";
import prisma from "../../../prisma/client";

export async function GET(request) {
  const budgetsAndExpenses = await prisma.budgets.findMany({
    select: {
      amount: true,
      name: true,
      icon: true,
      expenses: {
        select: {
          amount: true,
        },
      },
    },
  });

  return NextResponse.json(budgetsAndExpenses);
}
