import MemberModel from "../schema/Member.model";
import { Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";
import { HttpCode } from "../libs/Errors";
import { Message } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";

class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModel;
  }

  public async processSignup(input: MemberInput): Promise<Member> {
    const exsit = await this.memberModel
      .findOne({ memberType: MemberType.RESTAURANT })
      .exec();

    console.log("exsit:", exsit);
    if (exsit) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    try {
      // const tempResult = new this.memberModel(input);
      // const result = await tempResult.save();
      const result = await this.memberModel.create(input);
      result.memberPassword = "";

      return result;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
}

export default MemberService;
