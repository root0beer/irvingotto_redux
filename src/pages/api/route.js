import connectMongoDB from "../../../lib/mongodbconnect";
import Order from "../../../models/orders";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const data = await req.json();
    await connectMongoDB();
    const order = new Order(data);
    await order.save();
    return NextResponse.json({message: "Order created", order: order}, {status: 201});
};