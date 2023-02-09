import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type ProductWhereInput = {
  name?: StringNullableFilter;
  id?: StringFilter;
  itemPrice?: FloatNullableFilter;
  description?: StringNullableFilter;
  orders?: OrderListRelationFilter;
};
