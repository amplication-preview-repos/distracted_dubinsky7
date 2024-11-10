import { SortOrder } from "../../util/SortOrder";

export type AlarmOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  snoozeLimit?: SortOrder;
  sound?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
  volume?: SortOrder;
};
