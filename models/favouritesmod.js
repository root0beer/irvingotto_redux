import mongoose, { Schema } from "mongoose";

const favouritesSchema = new Schema({
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

const Favouritesmod = mongoose.models.Favouritesmod || mongoose.model("Favouritesmod", favouritesSchema);
export default Favouritesmod;