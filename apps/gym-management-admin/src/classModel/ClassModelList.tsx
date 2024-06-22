import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TRAINER_TITLE_FIELD } from "../trainer/TrainerTitle";

export const ClassModelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Classes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="End Time" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Start Time" source="startTime" />
        <ReferenceField label="Trainer" source="trainer.id" reference="Trainer">
          <TextField source={TRAINER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
