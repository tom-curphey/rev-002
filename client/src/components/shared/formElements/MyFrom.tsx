import { Button } from "@material-ui/core";
import { Form, Formik, Field } from "formik";
import React from "react";
import MyField from "./MyField";

interface IValues {
  firstName: String;
  lastName: String;
  email: String;
}

interface IProps {
  onSubmit: (values: IValues) => void;
}

const MyFrom: React.FC<IProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {({ values }) => (
        <Form>
          <div>
            <Field
              placeholder="First Name"
              label="First Name"
              name="firstName"
              component={MyField}
            />
          </div>
          <div>
            <Field
              placeholder="Last Name"
              label="last Name"
              name="lastName"
              component={MyField}
            />
          </div>
          <div>
            <Field
              placeholder="Email"
              label="Email"
              name="email"
              component={MyField}
            />
          </div>
          <Button type="submit">Submit</Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};

export default MyFrom;
