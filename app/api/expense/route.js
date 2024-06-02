import { notFound } from "next/navigation";
import prisma from "../../../prisma/client";
import { NextResponse } from "next/server";

export async function PATCH(request) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const amount = searchParams.get("amount");
  const createAt = searchParams.get("createAt");

  const data = request.json();
  const bud = await prisma.expenses.findFirst({
    where: {
      budgetId: parseInt(id),
    },
  });
  const expense = await prisma.expenses.update({
    data: {
      name,
      amount,
      createAt,
    },
    where: {
      id: parseInt(bud.id),
    },
  });

  return NextResponse.json(expense, { status: 201 });
}

export async function POST(request) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const amount = searchParams.get("amount");
  const createAt = searchParams.get("createAt");
  const budget = await prisma.budgets.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!budget) notFound();
  const expense = await prisma.expenses.create({
    data: {
      budgetId: parseInt(id),
      name: name,
      amount,
      createAt,
    },
  });

  return NextResponse.json(expense, { status: 202 });
}
