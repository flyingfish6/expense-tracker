import { notFound } from "next/navigation";
import prisma from "../../../prisma/client";
import { NextResponse } from "next/server";

export async function GET(request) {
  const expenses = await prisma.expenses.findMany();
  return NextResponse.json(expenses, { status: 200 });
}
