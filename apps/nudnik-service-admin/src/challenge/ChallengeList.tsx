import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ChallengeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Challenges"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="difficulty" source="difficulty" />
        <TextField label="ID" source="id" />
        <TextField label="successRate" source="successRate" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
