import { ClassModelCreateNestedManyWithoutTrainersInput } from "./ClassModelCreateNestedManyWithoutTrainersInput";

export type TrainerCreateInput = {
  activeStatus?: boolean | null;
  classes?: ClassModelCreateNestedManyWithoutTrainersInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  specialization?: string | null;
};
