import { Booking } from "../booking/Booking";

export type Member = {
  activeStatus: boolean | null;
  bookings?: Array<Booking>;
  createdAt: Date;
  email: string | null;
  id: string;
  membershipEndDate: Date | null;
  membershipStartDate: Date | null;
  name: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
