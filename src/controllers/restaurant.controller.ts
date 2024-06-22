import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../model/Member.service";
import { AdminRequest, MemberInput, LoginInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { Message } from "../libs/Errors";
import Errors from "../libs/Errors";

const memberService = new MemberService();
const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("Home Page");
    res.render("home");
  } catch (err) {
    console.log("Can't get to homepage", err);
    res.redirect("/admin");
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("Signup Page");
    res.render("signup");
  } catch (err) {
    console.log("Couldn't sign up", err);
    res.redirect("/admin");
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("Login Page");
    res.render("login");
    // send | json | redirect | end | render
  } catch (err) {
    console.log("Couldn't log in", err);
    res.redirect("/admin");
  }
};

restaurantController.processSignup = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("loginProcess");
    console.log("body", req.body);

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);
    // TO DO: Sessions Authentication

    req.session.member = result; // places "sid" within cookies that's on our browser & saves the result data on our database - sessions collection
    req.session.save(() => {
      res.send(result); // only after the first two taks are done will the result be sent to our API
    });
  } catch (err) {
    console.log("Couldn't sign up", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}") window.location.replace("admin/signup") </script>`
    );
  }
};

restaurantController.processLogin = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("processLogin");

    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);
    // TO DO: Sessions Authentication

    req.session.member = result;
    req.session.save(() => {
      res.send(result);
    });
  } catch (err) {
    console.log("Couldn't log in", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}") window.location.replace("admin/login") </script>`
    );
  }
};

restaurantController.logout = async (req: AdminRequest, res: Response) => {
  try {
    console.log("logout");

    req.session.destroy(() => {
      res.redirect("/admin");
    });
  } catch (err) {
    console.log("Couldn't log in", err);
    res.redirect("/admin");
  }
};

restaurantController.checkAuthSession = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("checkAuthSession");
    console.log(req.session);
    if (req.session?.member)
      res.send(
        `<script> alert("Hi ${req.session.member.memberNick}!") </script>`
      );
    else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`);
  } catch (err) {
    console.log("Couldn't log in", err);
    res.send(err);
  }
};

export default restaurantController;
