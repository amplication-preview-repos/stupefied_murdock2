import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ClassModelListRelationFilter } from "../classModel/ClassModelListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TrainerWhereInput = {
  activeStatus?: BooleanNullableFilter;
  classes?: ClassModelListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  specialization?: StringNullableFilter;
};
