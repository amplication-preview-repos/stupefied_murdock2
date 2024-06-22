import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";

export const MemberEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Active Status" source="activeStatus" />
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <DateTimeInput label="Membership End Date" source="membershipEndDate" />
        <DateTimeInput
          label="Membership Start Date"
          source="membershipStartDate"
        />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone Number" source="phoneNumber" />
      </SimpleForm>
    </Edit>
  );
};
