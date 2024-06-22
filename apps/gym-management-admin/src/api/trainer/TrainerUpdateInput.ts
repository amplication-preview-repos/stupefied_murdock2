import { ClassModelUpdateManyWithoutTrainersInput } from "./ClassModelUpdateManyWithoutTrainersInput";

export type TrainerUpdateInput = {
  activeStatus?: boolean | null;
  classes?: ClassModelUpdateManyWithoutTrainersInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  specialization?: string | null;
};
