import { AlarmWhereInput } from "./AlarmWhereInput";
import { AlarmOrderByInput } from "./AlarmOrderByInput";

export type AlarmFindManyArgs = {
  where?: AlarmWhereInput;
  orderBy?: Array<AlarmOrderByInput>;
  skip?: number;
  take?: number;
};
