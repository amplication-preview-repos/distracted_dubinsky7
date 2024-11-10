/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AlarmService } from "../alarm.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AlarmCreateInput } from "./AlarmCreateInput";
import { Alarm } from "./Alarm";
import { AlarmFindManyArgs } from "./AlarmFindManyArgs";
import { AlarmWhereUniqueInput } from "./AlarmWhereUniqueInput";
import { AlarmUpdateInput } from "./AlarmUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AlarmControllerBase {
  constructor(
    protected readonly service: AlarmService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Alarm })
  @nestAccessControl.UseRoles({
    resource: "Alarm",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAlarm(@common.Body() data: AlarmCreateInput): Promise<Alarm> {
    return await this.service.createAlarm({
      data: data,
      select: {
        createdAt: true,
        id: true,
        snoozeLimit: true,
        sound: true,
        time: true,
        updatedAt: true,
        volume: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Alarm] })
  @ApiNestedQuery(AlarmFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Alarm",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async alarms(@common.Req() request: Request): Promise<Alarm[]> {
    const args = plainToClass(AlarmFindManyArgs, request.query);
    return this.service.alarms({
      ...args,
      select: {
        createdAt: true,
        id: true,
        snoozeLimit: true,
        sound: true,
        time: true,
        updatedAt: true,
        volume: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Alarm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Alarm",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async alarm(
    @common.Param() params: AlarmWhereUniqueInput
  ): Promise<Alarm | null> {
    const result = await this.service.alarm({
      where: params,
      select: {
        createdAt: true,
        id: true,
        snoozeLimit: true,
        sound: true,
        time: true,
        updatedAt: true,
        volume: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Alarm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Alarm",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAlarm(
    @common.Param() params: AlarmWhereUniqueInput,
    @common.Body() data: AlarmUpdateInput
  ): Promise<Alarm | null> {
    try {
      return await this.service.updateAlarm({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          snoozeLimit: true,
          sound: true,
          time: true,
          updatedAt: true,
          volume: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Alarm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Alarm",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAlarm(
    @common.Param() params: AlarmWhereUniqueInput
  ): Promise<Alarm | null> {
    try {
      return await this.service.deleteAlarm({
        where: params,
        select: {
          createdAt: true,
          id: true,
          snoozeLimit: true,
          sound: true,
          time: true,
          updatedAt: true,
          volume: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}