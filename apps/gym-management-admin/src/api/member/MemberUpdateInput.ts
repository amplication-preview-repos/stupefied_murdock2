import { BookingUpdateManyWithoutMembersInput } from "./BookingUpdateManyWithoutMembersInput";

export type MemberUpdateInput = {
  activeStatus?: boolean | null;
  bookings?: BookingUpdateManyWithoutMembersInput;
  email?: string | null;
  membershipEndDate?: Date | null;
  membershipStartDate?: Date | null;
  name?: string | null;
  phoneNumber?: string | null;
};
