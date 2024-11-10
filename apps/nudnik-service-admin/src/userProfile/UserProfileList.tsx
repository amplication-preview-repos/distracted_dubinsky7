import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"UserProfiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="alarmHistory" source="alarmHistory" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="preferences" source="preferences" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />{" "}
      </Datagrid>
    </List>
  );
};
