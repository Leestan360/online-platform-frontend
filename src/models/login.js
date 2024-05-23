import * as Yup from "yup";

export const loginValuesValidation = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required"),
});

export class LoginInitials {
  constructor () {
    this.email = "";
    this.password = "";
  }
};