import { ChallengeWhereInput } from "./ChallengeWhereInput";
import { ChallengeOrderByInput } from "./ChallengeOrderByInput";

export type ChallengeFindManyArgs = {
  where?: ChallengeWhereInput;
  orderBy?: Array<ChallengeOrderByInput>;
  skip?: number;
  take?: number;
};
