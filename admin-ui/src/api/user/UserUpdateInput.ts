import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  balance?: number;
  balanceAvailable?: number;
  birthday?: Date;
  firstName?: string | null;
  lastName?: string | null;
  metadata?: InputJsonValue;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
