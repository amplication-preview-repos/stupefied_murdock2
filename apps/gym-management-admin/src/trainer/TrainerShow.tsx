import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TRAINER_TITLE_FIELD } from "./TrainerTitle";

export const TrainerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Active Status" source="activeStatus" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="Specialization" source="specialization" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ClassModel"
          target="trainerId"
          label="Classes"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="End Time" source="endTime" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Start Time" source="startTime" />
            <ReferenceField
              label="Trainer"
              source="trainer.id"
              reference="Trainer"
            >
              <TextField source={TRAINER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
