/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ClassModel } from "./ClassModel";
import { ClassModelCountArgs } from "./ClassModelCountArgs";
import { ClassModelFindManyArgs } from "./ClassModelFindManyArgs";
import { ClassModelFindUniqueArgs } from "./ClassModelFindUniqueArgs";
import { CreateClassModelArgs } from "./CreateClassModelArgs";
import { UpdateClassModelArgs } from "./UpdateClassModelArgs";
import { DeleteClassModelArgs } from "./DeleteClassModelArgs";
import { BookingFindManyArgs } from "../../booking/base/BookingFindManyArgs";
import { Booking } from "../../booking/base/Booking";
import { Trainer } from "../../trainer/base/Trainer";
import { ClassModelService } from "../classModel.service";
@graphql.Resolver(() => ClassModel)
export class ClassModelResolverBase {
  constructor(protected readonly service: ClassModelService) {}

  async _classModelsMeta(
    @graphql.Args() args: ClassModelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ClassModel])
  async classModels(
    @graphql.Args() args: ClassModelFindManyArgs
  ): Promise<ClassModel[]> {
    return this.service.classModels(args);
  }

  @graphql.Query(() => ClassModel, { nullable: true })
  async classModel(
    @graphql.Args() args: ClassModelFindUniqueArgs
  ): Promise<ClassModel | null> {
    const result = await this.service.classModel(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ClassModel)
  async createClassModel(
    @graphql.Args() args: CreateClassModelArgs
  ): Promise<ClassModel> {
    return await this.service.createClassModel({
      ...args,
      data: {
        ...args.data,

        trainer: args.data.trainer
          ? {
              connect: args.data.trainer,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ClassModel)
  async updateClassModel(
    @graphql.Args() args: UpdateClassModelArgs
  ): Promise<ClassModel | null> {
    try {
      return await this.service.updateClassModel({
        ...args,
        data: {
          ...args.data,

          trainer: args.data.trainer
            ? {
                connect: args.data.trainer,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ClassModel)
  async deleteClassModel(
    @graphql.Args() args: DeleteClassModelArgs
  ): Promise<ClassModel | null> {
    try {
      return await this.service.deleteClassModel(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Booking], { name: "bookings" })
  async findBookings(
    @graphql.Parent() parent: ClassModel,
    @graphql.Args() args: BookingFindManyArgs
  ): Promise<Booking[]> {
    const results = await this.service.findBookings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Trainer, {
    nullable: true,
    name: "trainer",
  })
  async getTrainer(
    @graphql.Parent() parent: ClassModel
  ): Promise<Trainer | null> {
    const result = await this.service.getTrainer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
