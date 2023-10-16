import mongoose, { Schema } from "mongoose";

const prodtesttwoSchema = new Schema(
  {
    orderSent: {
      type: Boolean,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
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

const Prodtesttwo = mongoose.models.Prodtesttwo || mongoose.model("Prodtesttwo", prodtesttwoSchema);
export default Prodtesttwo;