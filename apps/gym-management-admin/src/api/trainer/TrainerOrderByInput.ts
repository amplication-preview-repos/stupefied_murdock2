import { SortOrder } from "../../util/SortOrder";

export type TrainerOrderByInput = {
  activeStatus?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  specialization?: SortOrder;
  updatedAt?: SortOrder;
};
