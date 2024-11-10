import { SortOrder } from "../../util/SortOrder";

export type ChallengeOrderByInput = {
  createdAt?: SortOrder;
  difficulty?: SortOrder;
  id?: SortOrder;
  successRate?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
