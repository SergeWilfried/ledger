import { JsonValue } from "type-fest";

export type User = {
  balance: number;
  balanceAvailable: number;
  birthday: Date;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  metadata: JsonValue;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
