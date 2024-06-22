import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";
import { TrainerTitle } from "../trainer/TrainerTitle";

export const ClassModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="End Time" source="endTime" />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="Start Time" source="startTime" />
        <ReferenceInput source="trainer.id" reference="Trainer" label="Trainer">
          <SelectInput optionText={TrainerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
