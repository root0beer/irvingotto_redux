import { NextResponse } from "next/server";
import connectDB from "../../../../lib/mongodb";
import mongoose from "mongoose";
import Prodtesttwo from "../../../../models/prodtesttwo";

export async function POST(res) {
  try {
    const { orderSent, userId, priceAll, products } = await res.json();

    await connectDB();
    const existingEntry = await Prodtesttwo.findOne({
      userId,
    });

    if (existingEntry) {
      await Prodtesttwo.updateOne({ orderSent, userId, priceAll, products });
    } else {
      await Prodtesttwo.create({ orderSent, userId, priceAll, products });
    }
    return NextResponse.json({
      msg: ["Product data sent successfully"],
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

export async function GET() {
  try {
    await connectDB();
    const cart = await Prodtesttwo.findOne();
    return NextResponse.json({cart});
  } catch {
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
