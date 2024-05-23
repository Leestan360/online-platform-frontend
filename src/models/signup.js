import * as Yup from "yup";

export const signupValuesValidation = Yup.object().shape({
  username: Yup.string().required("Firstname is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters minimum")
    .required("Password is required"),
  passwordConfirmation: Yup.string().required("Rewrite your password"),
});

export class SignupInitials {
  constructor() {
    this.username = "";
    this.email = "";
    this.password = "";
    this.passwordConfirmation = "";
  }
}