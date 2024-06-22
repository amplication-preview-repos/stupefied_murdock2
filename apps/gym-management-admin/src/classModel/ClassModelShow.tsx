import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CLASSMODEL_TITLE_FIELD } from "./ClassModelTitle";
import { MEMBER_TITLE_FIELD } from "../member/MemberTitle";
import { TRAINER_TITLE_FIELD } from "../trainer/TrainerTitle";

export const ClassModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Booking"
          target="classFieldId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
            <TextField label="Booking Date" source="bookingDate" />
            <ReferenceField
              label="Class"
              source="classmodel.id"
              reference="ClassModel"
            >
              <TextField source={CLASSMODEL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Member"
              source="member.id"
              reference="Member"
            >
              <TextField source={MEMBER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
