import { Transaction } from "../transaction/Transaction";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Transaction>;
  updatedAt: Date;
};
