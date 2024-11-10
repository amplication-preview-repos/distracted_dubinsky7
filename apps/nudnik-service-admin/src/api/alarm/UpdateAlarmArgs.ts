import { AlarmWhereUniqueInput } from "./AlarmWhereUniqueInput";
import { AlarmUpdateInput } from "./AlarmUpdateInput";

export type UpdateAlarmArgs = {
  where: AlarmWhereUniqueInput;
  data: AlarmUpdateInput;
};
