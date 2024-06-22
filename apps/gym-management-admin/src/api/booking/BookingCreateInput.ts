import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type BookingCreateInput = {
  bookingDate?: Date | null;
  classField?: ClassModelWhereUniqueInput | null;
  member?: MemberWhereUniqueInput | null;
};
