export type Alarm = {
  createdAt: Date;
  id: string;
  snoozeLimit: number | null;
  sound: string | null;
  time: Date | null;
  updatedAt: Date;
  volume: number | null;
};
