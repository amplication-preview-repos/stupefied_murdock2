import { Booking } from "../booking/Booking";
import { Trainer } from "../trainer/Trainer";

export type ClassModel = {
  bookings?: Array<Booking>;
  createdAt: Date;
  description: string | null;
  endTime: Date | null;
  id: string;
  name: string | null;
  startTime: Date | null;
  trainer?: Trainer | null;
  updatedAt: Date;
};
