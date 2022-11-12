import { Address } from "../address/Address";
import { Transaction } from "../transaction/Transaction";

export type Customer = {
  address?: Address | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Transaction>;
  phone: string | null;
  updatedAt: Date;
};
