import { ClassModel as TClassModel } from "../api/classModel/ClassModel";

export const CLASSMODEL_TITLE_FIELD = "name";

export const ClassModelTitle = (record: TClassModel): string => {
  return record.name?.toString() || String(record.id);
};
