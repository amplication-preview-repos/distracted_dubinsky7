import { InputJsonValue } from "../../types";

export type UserProfileUpdateInput = {
  alarmHistory?: InputJsonValue;
  preferences?: InputJsonValue;
  username?: string | null;
};
