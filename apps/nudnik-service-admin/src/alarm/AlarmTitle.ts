import { Alarm as TAlarm } from "../api/alarm/Alarm";

export const ALARM_TITLE_FIELD = "sound";

export const AlarmTitle = (record: TAlarm): string => {
  return record.sound?.toString() || String(record.id);
};
