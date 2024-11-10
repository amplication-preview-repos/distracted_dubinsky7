import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AlarmEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="snoozeLimit" source="snoozeLimit" />
        <TextInput label="sound" source="sound" />
        <DateTimeInput label="time" source="time" />
        <NumberInput step={1} label="volume" source="volume" />
      </SimpleForm>
    </Edit>
  );
};
