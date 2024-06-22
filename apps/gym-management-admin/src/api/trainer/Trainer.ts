import { ClassModel } from "../classModel/ClassModel";

export type Trainer = {
  activeStatus: boolean | null;
  classes?: Array<ClassModel>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  specialization: string | null;
  updatedAt: Date;
};
