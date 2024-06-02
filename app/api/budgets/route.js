import { NextResponse } from "next/server";
import prisma from "../../../prisma/client";

export async function GET(request) {
  const budgets = await prisma.budgets.findMany();

  return NextResponse.json(budgets, { status: 200 });
}

export async function POST(request) {
  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get("name");
  const amount = searchParams.get("amount");
  const icon = searchParams.get("icon");
  const createdBy = searchParams.get("createdBy");

  const data = request.json();
  const budget = await prisma.budgets.create({
    data: {
      name,
      amount,
      icon,
      createdBy,
    },
  });

  return NextResponse.json(budget, { status: 201 });
}
