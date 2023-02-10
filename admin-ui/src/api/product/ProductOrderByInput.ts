import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  name?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  itemPrice?: SortOrder;
  description?: SortOrder;
};
