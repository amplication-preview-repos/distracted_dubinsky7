import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AlarmCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="snoozeLimit" source="snoozeLimit" />
        <TextInput label="sound" source="sound" />
        <DateTimeInput label="time" source="time" />
        <NumberInput step={1} label="volume" source="volume" />
      </SimpleForm>
    </Create>
  );
};
