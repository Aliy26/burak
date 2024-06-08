import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../model/Member.service";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("Home Page");
    res.send("Welcome sir Admin!");
  } catch (err) {
    console.log("Can't get to homepage", err);
  }
};

restaurantController.login = (req: Request, res: Response) => {
  try {
    console.log("Login Page");
    res.send("Sir Admin please log in");
    // send | json | redirect | end | render
  } catch (err) {
    console.log("Couldn't log in", err);
  }
};

restaurantController.signup = (req: Request, res: Response) => {
  try {
    console.log("Signup Page");
    res.send("Sing up as Admin");
  } catch (err) {
    console.log("Couldn't sign up", err);
  }
};

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    res.send("Done");
  } catch (err) {
    console.log("Couldn't log in", err);
  }
};

restaurantController.signupProcess = (req: Request, res: Response) => {
  try {
    console.log("loginProcess");
    res.send("Successully signed in!");
  } catch (err) {
    console.log("Couldn't sign up", err);
  }
};

export default restaurantController;
