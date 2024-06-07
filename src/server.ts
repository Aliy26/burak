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
      console.log(
        `The server is running successfully running on port: ${PORT} http://localhost:${PORT}/admin`
      );
    });
  })
  .catch((err) => console.log("Fail to connect to MongoDB", err));
