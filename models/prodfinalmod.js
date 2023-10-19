import mongoose, { Schema } from "mongoose";

const prodfinalmodSchema = new Schema(
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
                },
                productImageId: {
                  type: String,
                  required: true,
                },
                productImage: {
                  type: String,
                  required: true,
                },
                productImageBlur: {
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

const Prodfinalmod = mongoose.models.Prodfinalmod || mongoose.model("Prodfinalmod", prodfinalmodSchema);
export default Prodfinalmod;