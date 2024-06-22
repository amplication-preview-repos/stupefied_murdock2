import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ClassModelTitle } from "../classModel/ClassModelTitle";
import { MemberTitle } from "../member/MemberTitle";

export const BookingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Booking Date" source="bookingDate" />
        <ReferenceInput
          source="classField.id"
          reference="ClassModel"
          label="Class"
        >
          <SelectInput optionText={ClassModelTitle} />
        </ReferenceInput>
        <ReferenceInput source="member.id" reference="Member" label="Member">
          <SelectInput optionText={MemberTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
