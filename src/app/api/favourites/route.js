import Favouritesmod from "../../../../models/favouritesmod";

export async function POST(res) {
  try {
    const { userId, products } = await res.json();

    await connectDB();
    const existingEntry = await Favouritesmod.findOne({
      userId,
    });

    if (existingEntry) {
      await Favouritesmod.updateOne({ userId }, { products });
    } else {
      await Favouritesmod.create({ userId, products });
    }
    return NextResponse.json({
      msg: ["Favourites sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json(error);
    }
  }
}
