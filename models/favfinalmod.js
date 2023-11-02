import mongoose, { Schema } from "mongoose";

const favfianlSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  products: [
    {
      product: {
        productId: {
          type: String,
          required: true,
        },
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
        },
      },
    },
  ],
});

const Favfinalsmod =
  mongoose.models.Favfinalsmod ||
  mongoose.model("Favfinalsmod", favfianlSchema);
export default Favfinalsmod;
