import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type TransactionCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
