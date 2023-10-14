import { NextResponse } from "next/server";
import connectDB from "../../../../lib/mongodb";
import Order from "../../../../models/orders";
import mongoose from "mongoose";

export async function POST(res) {
  try {
    const { price, products } = await res.json();

    console.log(price, "price");

    await connectDB();
    await Order.create({ price, products });
    return NextResponse.json({
      msg: ["Order sent successfully"],
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
