import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { TransactionUpdateManyWithoutCustomersInput } from "./TransactionUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: TransactionUpdateManyWithoutCustomersInput;
  phone?: string | null;
};
