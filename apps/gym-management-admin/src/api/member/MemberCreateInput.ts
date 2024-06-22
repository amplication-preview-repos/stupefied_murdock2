import { BookingCreateNestedManyWithoutMembersInput } from "./BookingCreateNestedManyWithoutMembersInput";

export type MemberCreateInput = {
  activeStatus?: boolean | null;
  bookings?: BookingCreateNestedManyWithoutMembersInput;
  email?: string | null;
  membershipEndDate?: Date | null;
  membershipStartDate?: Date | null;
  name?: string | null;
  phoneNumber?: string | null;
};
