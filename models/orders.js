import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    products: [
      {
        product: { type: Object, required: true },
      },
    ],
    // userId: {
    //   type: Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;