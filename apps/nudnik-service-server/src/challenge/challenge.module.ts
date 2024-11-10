import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChallengeModuleBase } from "./base/challenge.module.base";
import { ChallengeService } from "./challenge.service";
import { ChallengeController } from "./challenge.controller";
import { ChallengeResolver } from "./challenge.resolver";

@Module({
  imports: [ChallengeModuleBase, forwardRef(() => AuthModule)],
  controllers: [ChallengeController],
  providers: [ChallengeService, ChallengeResolver],
  exports: [ChallengeService],
})
export class ChallengeModule {}
