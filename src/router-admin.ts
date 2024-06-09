import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

/** Restaurant */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/login", restaurantController.login)
  .post("/login", restaurantController.processLogin);
routerAdmin
  .get("/signup", restaurantController.signup)
  .post("/signup", restaurantController.processSignup);

/** Product */
/** User */

export default routerAdmin;
