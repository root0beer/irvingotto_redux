import { NextResponse } from "next/server";
import connectDB from "../../../../lib/mongodb";
import mongoose from "mongoose";
import Dummy from "../../../../models/dummy";

export async function POST(res) {
  try {
    const { product, price } = await res.json();

    await connectDB();
    await Dummy.create({ product, price });
    return NextResponse.json({
      msg: ["Dummy sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json(error);
    }
  }
}
