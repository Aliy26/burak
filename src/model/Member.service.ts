import MemberModel from "../schema/Member.model";
import { Member, MemberInput } from "../libs/types/member";

class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModel;
  }

  public async processSignup(input: MemberInput): Promise<Member> {
    const result = await this.memberModel.create(input);
    return result;
  }
}

export default MemberService;
