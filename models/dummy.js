import mongoose, { Schema } from "mongoose";

const dummySchema = new Schema(
  {
    product: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
);

const Dummy = mongoose.models.Dummy || mongoose.model("Dummy", dummySchema);
export default Dummy;
