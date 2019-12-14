import React from "react";
import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";
import { TextFieldProps } from "@material-ui/core/TextField";

interface IProps {}

export const MyField: React.FC<FieldProps & TextFieldProps> = ({
  label,
  placeholder,
  field
}) => {
  return <TextField label={label} placeholder={placeholder} {...field} />;
};

export default MyField;
