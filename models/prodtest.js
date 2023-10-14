import mongoose, { Schema } from "mongoose";

const prodtestSchema = new Schema(
  {
    priceAll: {
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
                }
            },
            quantity: {
                type: Number,
                required: true,
            },
        }
    ]
  },
);

const Prodtest = mongoose.models.Prodtest || mongoose.model("Prodtest", prodtestSchema);
export default Prodtest;