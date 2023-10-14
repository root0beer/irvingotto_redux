import mongoose, { Schema } from "mongoose";

const ordersSchema = new Schema(
  {
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
  },
  { timestamps: true },
);

const Order = mongoose.models.Order || mongoose.model("Order", ordersSchema);
export default Order;