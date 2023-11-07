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


export async function DELETE(res) {
  try {
    const { userId, productId } = await res.json();

    await connectDB();

    // Update the document to remove the specified product by productId
    const result = await Favfinalsmod.updateOne(
      { userId },
      { $pull: { products: { 'product.productId': productId } } }
    );

    if (result.nModified === 0) {
      return NextResponse.json({
        msg: ["Product not found in favorites"],
      });
    }

    return NextResponse.json({
      msg: ["Product removed from favorites"],
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