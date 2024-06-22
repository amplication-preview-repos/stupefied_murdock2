import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type BookingUpdateInput = {
  bookingDate?: Date | null;
  classField?: ClassModelWhereUniqueInput | null;
  member?: MemberWhereUniqueInput | null;
};
