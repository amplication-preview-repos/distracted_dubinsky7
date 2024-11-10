import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AlarmWhereInput = {
  id?: StringFilter;
  snoozeLimit?: IntNullableFilter;
  sound?: StringNullableFilter;
  time?: DateTimeNullableFilter;
  volume?: IntNullableFilter;
};
