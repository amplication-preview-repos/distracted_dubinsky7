import { InputJsonValue } from "../../types";

export type UserProfileCreateInput = {
  alarmHistory?: InputJsonValue;
  preferences?: InputJsonValue;
  username?: string | null;
};
