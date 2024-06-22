import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  bookingDate?: SortOrder;
  classFieldId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  memberId?: SortOrder;
  updatedAt?: SortOrder;
};
