import { cities } from "../../data";
import { CityModel } from "../../models";
import { db } from "../../db";
import { catchError, invalidMethod, AppError } from "../../utils";

export default catchError(async (req, res) => {
  switch (req.method) {
    case "POST":
      return await createData(res);
    default:
      return invalidMethod();
  }
});

const createData = async (res) => {
  if (process.env.NODE_ENV === "production") {
    throw new AppError(400, "Cannot be accessed from production");
  }

  await db.connect();
  await CityModel.deleteMany();
  await CityModel.insertMany(cities);
  await db.disconnect();
  res.status(200).json({ name: "Data creada" });
};
