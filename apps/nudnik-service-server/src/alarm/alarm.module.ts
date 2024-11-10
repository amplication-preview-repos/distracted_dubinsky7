import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AlarmModuleBase } from "./base/alarm.module.base";
import { AlarmService } from "./alarm.service";
import { AlarmController } from "./alarm.controller";
import { AlarmResolver } from "./alarm.resolver";

@Module({
  imports: [AlarmModuleBase, forwardRef(() => AuthModule)],
  controllers: [AlarmController],
  providers: [AlarmService, AlarmResolver],
  exports: [AlarmService],
})
export class AlarmModule {}
