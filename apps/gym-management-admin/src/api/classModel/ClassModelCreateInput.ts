import { BookingCreateNestedManyWithoutClassModelsInput } from "./BookingCreateNestedManyWithoutClassModelsInput";
import { TrainerWhereUniqueInput } from "../trainer/TrainerWhereUniqueInput";

export type ClassModelCreateInput = {
  bookings?: BookingCreateNestedManyWithoutClassModelsInput;
  description?: string | null;
  endTime?: Date | null;
  name?: string | null;
  startTime?: Date | null;
  trainer?: TrainerWhereUniqueInput | null;
};
