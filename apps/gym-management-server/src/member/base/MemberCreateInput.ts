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
  IsDate,
} from "class-validator";
import { BookingCreateNestedManyWithoutMembersInput } from "./BookingCreateNestedManyWithoutMembersInput";
import { Type } from "class-transformer";

@InputType()
class MemberCreateInput {
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
    type: () => BookingCreateNestedManyWithoutMembersInput,
  })
  @ValidateNested()
  @Type(() => BookingCreateNestedManyWithoutMembersInput)
  @IsOptional()
  @Field(() => BookingCreateNestedManyWithoutMembersInput, {
    nullable: true,
  })
  bookings?: BookingCreateNestedManyWithoutMembersInput;

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
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  membershipEndDate?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  membershipStartDate?: Date | null;

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
}

export { MemberCreateInput as MemberCreateInput };
