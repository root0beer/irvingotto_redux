import Prodfinalmod from "../../../../models/prodfinalmod";
import mongoose from "mongoose";
import connectDB from "../../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(res) {
    try {
      const { orderSent, userId, priceAll, products } = await res.json();
  
      await connectDB();
      const existingEntry = await Prodfinalmod.findOne({
        userId,
      });
  
      if (existingEntry) {
        await Prodfinalmod.updateOne({userId}, { orderSent, priceAll, products });
      } else {
        await Prodfinalmod.create({ orderSent, userId, priceAll, products });
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
      const cart = await Prodfinalmod.find();
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
  