import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  balance?: SortOrder;
  balanceAvailable?: SortOrder;
  birthday?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  metadata?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
