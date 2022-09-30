import mongoose, { model, Schema } from "mongoose";

const citySchema = new Schema({
  videoUrl: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: [String], required: true },
});

const CityModel = mongoose.models?.City || model("City", citySchema);

export default CityModel;
