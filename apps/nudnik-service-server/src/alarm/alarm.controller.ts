import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AlarmService } from "./alarm.service";
import { AlarmControllerBase } from "./base/alarm.controller.base";

@swagger.ApiTags("alarms")
@common.Controller("alarms")
export class AlarmController extends AlarmControllerBase {
  constructor(
    protected readonly service: AlarmService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
