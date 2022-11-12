import { TransactionCreateNestedManyWithoutProductsInput } from "./TransactionCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: TransactionCreateNestedManyWithoutProductsInput;
};
