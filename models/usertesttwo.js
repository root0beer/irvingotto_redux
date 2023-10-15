import mongoose, { Schema } from "mongoose";

const usertesttwoSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
  },
);

const Usertesttwo = mongoose.models.Usertesttwo || mongoose.model("Usertesttwo", usertesttwoSchema);
export default Usertesttwo;