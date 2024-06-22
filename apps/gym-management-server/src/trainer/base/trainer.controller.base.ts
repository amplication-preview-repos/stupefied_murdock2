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
import { TrainerService } from "../trainer.service";
import { TrainerCreateInput } from "./TrainerCreateInput";
import { Trainer } from "./Trainer";
import { TrainerFindManyArgs } from "./TrainerFindManyArgs";
import { TrainerWhereUniqueInput } from "./TrainerWhereUniqueInput";
import { TrainerUpdateInput } from "./TrainerUpdateInput";
import { ClassModelFindManyArgs } from "../../classModel/base/ClassModelFindManyArgs";
import { ClassModel } from "../../classModel/base/ClassModel";
import { ClassModelWhereUniqueInput } from "../../classModel/base/ClassModelWhereUniqueInput";

export class TrainerControllerBase {
  constructor(protected readonly service: TrainerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Trainer })
  async createTrainer(
    @common.Body() data: TrainerCreateInput
  ): Promise<Trainer> {
    return await this.service.createTrainer({
      data: data,
      select: {
        activeStatus: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phoneNumber: true,
        specialization: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Trainer] })
  @ApiNestedQuery(TrainerFindManyArgs)
  async trainers(@common.Req() request: Request): Promise<Trainer[]> {
    const args = plainToClass(TrainerFindManyArgs, request.query);
    return this.service.trainers({
      ...args,
      select: {
        activeStatus: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phoneNumber: true,
        specialization: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Trainer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async trainer(
    @common.Param() params: TrainerWhereUniqueInput
  ): Promise<Trainer | null> {
    const result = await this.service.trainer({
      where: params,
      select: {
        activeStatus: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phoneNumber: true,
        specialization: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Trainer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTrainer(
    @common.Param() params: TrainerWhereUniqueInput,
    @common.Body() data: TrainerUpdateInput
  ): Promise<Trainer | null> {
    try {
      return await this.service.updateTrainer({
        where: params,
        data: data,
        select: {
          activeStatus: true,
          createdAt: true,
          email: true,
          id: true,
          name: true,
          phoneNumber: true,
          specialization: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Trainer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTrainer(
    @common.Param() params: TrainerWhereUniqueInput
  ): Promise<Trainer | null> {
    try {
      return await this.service.deleteTrainer({
        where: params,
        select: {
          activeStatus: true,
          createdAt: true,
          email: true,
          id: true,
          name: true,
          phoneNumber: true,
          specialization: true,
          updatedAt: true,
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

  @common.Get("/:id/classes")
  @ApiNestedQuery(ClassModelFindManyArgs)
  async findClasses(
    @common.Req() request: Request,
    @common.Param() params: TrainerWhereUniqueInput
  ): Promise<ClassModel[]> {
    const query = plainToClass(ClassModelFindManyArgs, request.query);
    const results = await this.service.findClasses(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        endTime: true,
        id: true,
        name: true,
        startTime: true,

        trainer: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/classes")
  async connectClasses(
    @common.Param() params: TrainerWhereUniqueInput,
    @common.Body() body: ClassModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      classes: {
        connect: body,
      },
    };
    await this.service.updateTrainer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/classes")
  async updateClasses(
    @common.Param() params: TrainerWhereUniqueInput,
    @common.Body() body: ClassModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      classes: {
        set: body,
      },
    };
    await this.service.updateTrainer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/classes")
  async disconnectClasses(
    @common.Param() params: TrainerWhereUniqueInput,
    @common.Body() body: ClassModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      classes: {
        disconnect: body,
      },
    };
    await this.service.updateTrainer({
      where: params,
      data,
      select: { id: true },
    });
  }
}
