import { SortOrder } from "../../util/SortOrder";

export type MemberOrderByInput = {
  activeStatus?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  membershipEndDate?: SortOrder;
  membershipStartDate?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
