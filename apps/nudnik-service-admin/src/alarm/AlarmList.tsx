import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AlarmList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Alarms"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="snoozeLimit" source="snoozeLimit" />
        <TextField label="sound" source="sound" />
        <TextField label="time" source="time" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="volume" source="volume" />{" "}
      </Datagrid>
    </List>
  );
};
