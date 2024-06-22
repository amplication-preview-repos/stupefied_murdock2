import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type BookingWhereInput = {
  bookingDate?: DateTimeNullableFilter;
  classField?: ClassModelWhereUniqueInput;
  id?: StringFilter;
  member?: MemberWhereUniqueInput;
};
