import { db } from "../../db";
import { CityModel } from "../../models";
import { catchError, invalidMethod } from "../../utils";

export default catchError(async (req, res) => {
  switch (req.method) {
    case "GET":
      return await getAllCities(res);
    default:
      return invalidMethod();
  }
});

const getAllCities = async (res) => {
  await db.connect();
  const cities = await CityModel.find()
    .lean()
    .select("videoUrl title description tags");
  await db.disconnect();

  res.status(200).json(cities);
};
