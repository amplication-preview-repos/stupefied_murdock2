import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MemberWhereInput = {
  activeStatus?: BooleanNullableFilter;
  bookings?: BookingListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  membershipEndDate?: DateTimeNullableFilter;
  membershipStartDate?: DateTimeNullableFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
};
