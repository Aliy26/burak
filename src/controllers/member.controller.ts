import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../model/Member.service";
import { MemberInput, LoginInput, Member } from "../libs/types/member";
import Errors from "../libs/Errors";
import AuthService from "../model/Auth.service";
// REACT

const memberService = new MemberService();
const authService = new AuthService();

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");
    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input),
      token = await authService.createToken(result);
    console.log("token>>", token);
    res.json({ member: result });
  } catch (err) {
    console.log("Couldn't sign up", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    const input: LoginInput = req.body,
      result = await memberService.login(input),
      token = await authService.createToken(result);
    console.log("token>>", token);

    res.json({ member: result });
  } catch (err) {
    console.log("Couldn't log in", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default memberController;
