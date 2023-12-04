import { ConnectDb } from "@/dbConfig/db";
import { userModel } from "@/models/topic";
import { NextResponse } from "next/server";

ConnectDb();
export async function POST(req) {
  const { name, type, email, phone, alternatPhone } = await req.json();

  await userModel.create({
    name,
    type,
    email,
    phone,
    alternatPhone,
  });
  return NextResponse.json({ message: "Topic created" }, { status: 201 });
}

export async function GET() {
  await ConnectDb();
  const topics = await userModel.find();
  return NextResponse.json({ topics });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");

  await ConnectDb();
  await userModel.findByIdAndDelete(id);
  return NextResponse.json({ message: "topics Deleted" }, { status: 200 });
}
