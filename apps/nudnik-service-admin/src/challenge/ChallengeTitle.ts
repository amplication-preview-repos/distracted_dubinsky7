import { Challenge as TChallenge } from "../api/challenge/Challenge";

export const CHALLENGE_TITLE_FIELD = "id";

export const ChallengeTitle = (record: TChallenge): string => {
  return record.id?.toString() || String(record.id);
};
