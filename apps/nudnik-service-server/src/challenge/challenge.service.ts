import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChallengeServiceBase } from "./base/challenge.service.base";

@Injectable()
export class ChallengeService extends ChallengeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
