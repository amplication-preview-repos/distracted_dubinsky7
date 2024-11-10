import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChallengeService } from "./challenge.service";
import { ChallengeControllerBase } from "./base/challenge.controller.base";

@swagger.ApiTags("challenges")
@common.Controller("challenges")
export class ChallengeController extends ChallengeControllerBase {
  constructor(
    protected readonly service: ChallengeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
