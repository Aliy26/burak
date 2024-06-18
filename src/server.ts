import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
mongoose.set("strictQuery", false);
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("Successfully connected to MongoDB");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, () => {
      console.info(
        `The server is running successfully running on port: ${PORT}`
      );
      console.info(`Admin project is on http://localhost:${PORT}/admin \n`);
    });
  })
  .catch((err) => console.log("Fail to connect to MongoDB", err));
