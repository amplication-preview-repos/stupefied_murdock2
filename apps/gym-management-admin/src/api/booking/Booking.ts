import { ClassModel } from "../classModel/ClassModel";
import { Member } from "../member/Member";

export type Booking = {
  bookingDate: Date | null;
  classField?: ClassModel | null;
  createdAt: Date;
  id: string;
  member?: Member | null;
  updatedAt: Date;
};
