import { Order } from "../order/Order";

export type Product = {
  name: string | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  itemPrice: number | null;
  description: string | null;
  orders?: Array<Order>;
};
