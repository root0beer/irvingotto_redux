import { NextResponse } from "next/server";
import connectDB from "../../../../lib/mongodb";
import mongoose from "mongoose";
import Usertesttwo from "../../../../models/usertesttwo";

export async function POST(res) {
  try {
    const { userId } = await res.json();

    await connectDB();
    await Usertesttwo.create({ userId });
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

export const GET = async () => {
  try {
    await connectMongoDB();
    const user = await Usertesttwo.find();
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.error(error);
  }
};
