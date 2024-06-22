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
import { Trainer } from "./Trainer";
import { TrainerCountArgs } from "./TrainerCountArgs";
import { TrainerFindManyArgs } from "./TrainerFindManyArgs";
import { TrainerFindUniqueArgs } from "./TrainerFindUniqueArgs";
import { CreateTrainerArgs } from "./CreateTrainerArgs";
import { UpdateTrainerArgs } from "./UpdateTrainerArgs";
import { DeleteTrainerArgs } from "./DeleteTrainerArgs";
import { ClassModelFindManyArgs } from "../../classModel/base/ClassModelFindManyArgs";
import { ClassModel } from "../../classModel/base/ClassModel";
import { TrainerService } from "../trainer.service";
@graphql.Resolver(() => Trainer)
export class TrainerResolverBase {
  constructor(protected readonly service: TrainerService) {}

  async _trainersMeta(
    @graphql.Args() args: TrainerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Trainer])
  async trainers(
    @graphql.Args() args: TrainerFindManyArgs
  ): Promise<Trainer[]> {
    return this.service.trainers(args);
  }

  @graphql.Query(() => Trainer, { nullable: true })
  async trainer(
    @graphql.Args() args: TrainerFindUniqueArgs
  ): Promise<Trainer | null> {
    const result = await this.service.trainer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Trainer)
  async createTrainer(
    @graphql.Args() args: CreateTrainerArgs
  ): Promise<Trainer> {
    return await this.service.createTrainer({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Trainer)
  async updateTrainer(
    @graphql.Args() args: UpdateTrainerArgs
  ): Promise<Trainer | null> {
    try {
      return await this.service.updateTrainer({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Trainer)
  async deleteTrainer(
    @graphql.Args() args: DeleteTrainerArgs
  ): Promise<Trainer | null> {
    try {
      return await this.service.deleteTrainer(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [ClassModel], { name: "classes" })
  async findClasses(
    @graphql.Parent() parent: Trainer,
    @graphql.Args() args: ClassModelFindManyArgs
  ): Promise<ClassModel[]> {
    const results = await this.service.findClasses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}