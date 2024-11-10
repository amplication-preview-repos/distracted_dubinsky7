import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UserProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="alarmHistory" source="alarmHistory" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="preferences" source="preferences" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
