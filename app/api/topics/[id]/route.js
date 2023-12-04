import { ConnectDb } from "@/dbConfig/db";
import { userModel } from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  await ConnectDb();
  const { id } = params;
  const {
    newname: name,
    newtype: type,
    newemail: email,
    newphone: phone,
    newalternatPhone: alternatPhone,
  } = await req.json();

  await userModel.findByIdAndUpdate(id, {
    name,
    type,
    email,
    phone,
    alternatPhone,
  });
  return NextResponse.json({ message: "topics Updated" }, { status: 200 });
}

export async function GET(req, { params }) {
  await ConnectDb();

  const { id } = params;
  const topic = await userModel.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
