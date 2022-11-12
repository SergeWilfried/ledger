import { TransactionUpdateManyWithoutProductsInput } from "./TransactionUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: TransactionUpdateManyWithoutProductsInput;
};
