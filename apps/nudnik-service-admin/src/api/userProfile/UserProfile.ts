import { JsonValue } from "type-fest";

export type UserProfile = {
  alarmHistory: JsonValue;
  createdAt: Date;
  id: string;
  preferences: JsonValue;
  updatedAt: Date;
  username: string | null;
};
