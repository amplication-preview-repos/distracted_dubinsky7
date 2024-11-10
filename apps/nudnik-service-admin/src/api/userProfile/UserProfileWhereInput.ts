import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserProfileWhereInput = {
  alarmHistory?: JsonFilter;
  id?: StringFilter;
  preferences?: JsonFilter;
  username?: StringNullableFilter;
};
