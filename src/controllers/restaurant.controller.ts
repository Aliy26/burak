import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../model/Member.service";
import { MemberInput, LoginInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();
const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("Home Page");
    res.render("home");
  } catch (err) {
    console.log("Can't get to homepage", err);
  }
};

restaurantController.signup = (req: Request, res: Response) => {
  try {
    console.log("Signup Page");
    res.render("signup");
  } catch (err) {
    console.log("Couldn't sign up", err);
  }
};

restaurantController.login = (req: Request, res: Response) => {
  try {
    console.log("Login Page");
    res.render("login");
    // send | json | redirect | end | render
  } catch (err) {
    console.log("Couldn't log in", err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("loginProcess");
    console.log("body", req.body);

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);
    // TO DO: Sessions Authentication

    res.send(result);
  } catch (err) {
    console.log("Couldn't sign up", err);
    res.send(err);
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");

    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);
    // TO DO: Sessions Authentication

    res.send(result);
  } catch (err) {
    console.log("Couldn't log in", err);
    res.send(err);
  }
};

export default restaurantController;
