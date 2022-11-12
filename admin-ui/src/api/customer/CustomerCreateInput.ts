import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { TransactionCreateNestedManyWithoutCustomersInput } from "./TransactionCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: AddressWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: TransactionCreateNestedManyWithoutCustomersInput;
  phone?: string | null;
};
