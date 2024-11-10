import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ChallengeWhereInput = {
  difficulty?: "Option1";
  id?: StringFilter;
  successRate?: FloatNullableFilter;
  typeField?: "Option1";
};
