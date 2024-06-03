import { NextResponse } from "next/server";
import prisma from "../../../prisma/client";
import { notFound } from "next/navigation";

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
export async function DELETE(request) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  const bud = await prisma.budgets.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!bud) notFound();
  const budget = await prisma.budgets.delete({
    where: {
      id: bud.id,
    },
  });

  return NextResponse.json(budget, { status: 202 });
}

export async function PATCH(request) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const amount = searchParams.get("amount");
  const icon = searchParams.get("icon");
  const bud = await prisma.budgets.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!bud) notFound();
  const budget = await prisma.budgets.update({
    where: { id: bud.id },
    data: {
      name,
      amount,
      icon,
    },
  });

  return NextResponse.json(budget, { status: 203 });
}
