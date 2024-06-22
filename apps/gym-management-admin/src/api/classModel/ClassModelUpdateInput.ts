import { BookingUpdateManyWithoutClassModelsInput } from "./BookingUpdateManyWithoutClassModelsInput";
import { TrainerWhereUniqueInput } from "../trainer/TrainerWhereUniqueInput";

export type ClassModelUpdateInput = {
  bookings?: BookingUpdateManyWithoutClassModelsInput;
  description?: string | null;
  endTime?: Date | null;
  name?: string | null;
  startTime?: Date | null;
  trainer?: TrainerWhereUniqueInput | null;
};
