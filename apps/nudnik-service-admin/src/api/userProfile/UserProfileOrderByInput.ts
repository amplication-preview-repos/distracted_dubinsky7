import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  alarmHistory?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  preferences?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
