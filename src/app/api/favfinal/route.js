import Favfinalsmod from "../../../../models/favfinalmod";
import mongoose from "mongoose";
import connectDB from "../../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(res) {
  try {
    const { userId, products } = await res.json();

    await connectDB();
    const existingEntry = await Favfinalsmod.findOne({
      userId,
    });

    if (existingEntry) {
      await Favfinalsmod.updateOne({ userId }, { products });
    } else {
      await Favfinalsmod.create({ userId, products });
    }
    return NextResponse.json({
      msg: ["Favourites sent successfully"],
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
};

export async function GET() {
  try {
    await connectDB();
    const favourites = await Favfinalsmod.find();
    return NextResponse.json({favourites});
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

