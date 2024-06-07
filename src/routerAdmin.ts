import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

routerAdmin.get("/", restaurantController.goHome);

routerAdmin.get("/login", restaurantController.login);

routerAdmin.get("/signup", restaurantController.signup);

export default routerAdmin;
