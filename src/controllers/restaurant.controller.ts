import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../model/Member.service";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Welcome sir Admin!");
  } catch (err) {
    console.log("Can't get to homepage", err);
  }
};

restaurantController.login = (req: Request, res: Response) => {
  try {
    res.send("Sir Admin please log in");
  } catch (err) {
    console.log("Couldn't log in", err);
  }
};

restaurantController.signup = (req: Request, res: Response) => {
  try {
    res.send("Continue as Admin?");
  } catch (err) {
    console.log("Couldn't sign up", err);
  }
};

export default restaurantController;
