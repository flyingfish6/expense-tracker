import { NextResponse } from "next/server";
import prisma from "../../../prisma/client";
export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const budgetsAndExpenses = await prisma.budgets.findUnique({
    select: {
      id: true,
      amount: true,
      name: true,
      icon: true,
      expenses: {
        select: {
          amount: true,
        },
      },
    },
    where: {
      id: parseInt(id),
    },
  });

  return NextResponse.json(budgetsAndExpenses);
}
