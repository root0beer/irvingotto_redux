import mongoose, { Schema } from "mongoose";

const ordersSchema = new Schema(
  {
    
    // products: [
    //   {
    //     product: {
    //       title: {
    //         type: String,
    //         required: true,
    //       },
    //       price: {
    //         type: String,
    //         required: true,
    //       },
    //     },
    //     quantity: {
    //       type: Number,
    //       required: true,
    //     },
    //   },
    // ],
    price: {
      type: Number,
      required: true,
    },
    totalprice: {
      type: Number,
      required: true,
    },
    // title: {
    //   type: String,
    //   required: true,
    // },
  },
);

const Order = mongoose.models.Order || mongoose.model("Order", ordersSchema);
export default Order;
