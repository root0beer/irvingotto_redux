import mongoose, { Schema } from "mongoose";

const ordersSchema = new Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    products: [
      {
        product: {
          title: {
            type: String,
            required: true,
          },
          price: {
            type: String,
            required: true,
          },
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", ordersSchema);
export default Order;
