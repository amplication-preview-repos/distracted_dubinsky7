import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AlarmServiceBase } from "./base/alarm.service.base";

@Injectable()
export class AlarmService extends AlarmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
