/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsOptional,
  ValidateNested,
  IsString,
} from "class-validator";
import { ClassModelCreateNestedManyWithoutTrainersInput } from "./ClassModelCreateNestedManyWithoutTrainersInput";
import { Type } from "class-transformer";

@InputType()
class TrainerCreateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  activeStatus?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => ClassModelCreateNestedManyWithoutTrainersInput,
  })
  @ValidateNested()
  @Type(() => ClassModelCreateNestedManyWithoutTrainersInput)
  @IsOptional()
  @Field(() => ClassModelCreateNestedManyWithoutTrainersInput, {
    nullable: true,
  })
  classes?: ClassModelCreateNestedManyWithoutTrainersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  specialization?: string | null;
}

export { TrainerCreateInput as TrainerCreateInput };
