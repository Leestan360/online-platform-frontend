import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import config from "../../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { SignupInitials, signupValuesValidation } from "../../models/signup";

// Login initial values
const signupInitialValues = new SignupInitials();

function Signup() {
  const navigate = useNavigate();

  // Handle signup
  const handleSignup = async (values, { setSubmitting }) => {
    setSubmitting(true);

    try {
      const payload = {
        user: {
          username: values.email,
          email: values.email,
          password: values.password,
          password_confirmation: values.passwordConfirmation,
        },
      };

      const response = await axios.post(
        `${config.apiBaseUrl}/signup`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Display signup success message and navigate to home page
      if (response.status === 201) {
        toast.success(response.data.message || "Signup successful!");
        navigate("/");
      }
    } catch (error) {
      // Display signup error messages
      const errors = error.response.data.errors;
      if (errors && errors.length > 0) {
        errors.forEach((err) => {
          toast.error(err);
        });
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <ToastContainer />
      <div className="border border-tertiary rounded-lg py-7 px-6 w-[22%] shadow-lg shadow-secondary ">
        <div>
          <p className="font-[500] text-2xl">Welcome!</p>
          <p className="text-secondary font-[430]">
            Create your account to continue
          </p>
        </div>
        <Formik
          initialValues={signupInitialValues}
          validationSchema={signupValuesValidation}
          onSubmit={handleSignup}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="my-7">
                <p className="my-2 font-[500] ">Username</p>
                <Field
                  name="username"
                  type="text"
                  // placeholder="Username"
                  className="border border-tertiary rounded-lg py-2 px-1 outline-none w-full shadow-sm shadow-secondary "
                />
                <p className="text-red">
                  <ErrorMessage name="username" />
                </p>
              </div>

              <div className="my-7">
                <p className="my-2 font-[500] ">Email</p>
                <Field
                  name="email"
                  type="email"
                  // placeholder="Email address"
                  className="border border-tertiary rounded-lg py-2 px-1 outline-none w-full shadow-sm shadow-secondary "
                />
                <p className="text-red">
                  <ErrorMessage name="email" />
                </p>
              </div>

              <div className="my-7">
                <p className="my-2 font-[500] ">Password</p>
                <Field
                  name="password"
                  type="password"
                  // placeholder="Password"
                  className="border border-tertiary rounded-lg py-2 px-1 outline-none w-full shadow-sm shadow-secondary"
                />
                <p className="text-red">
                  <ErrorMessage name="password" />
                </p>
              </div>

              <div className="my-7">
                <p className="my-2 font-[500] ">Confirmation Password</p>
                <Field
                  name="passwordConfirmation"
                  type="password"
                  // placeholder="Confirm Password"
                  className="border border-tertiary rounded-lg py-2 px-1 outline-none w-full shadow-sm shadow-secondary"
                />
                <p className="text-red">
                  <ErrorMessage name="passwordConfirmation" />
                </p>
              </div>

              <div className="w-full">
                <button
                  type="submit"
                  className="w-full bg-primary text-white rounded-lg py-2 font-[500] "
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing Up..." : "Sign Up"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="text-center mt-10 py-3 border border-tertiary rounded-lg shadow-sm shadow-secondary hover:shadow-lg hover:shadow-secondary">
          <p>
            <span className="text-secondary font-[430]">Already a member?</span>{" "}
            <Link to="/auth/login" className="font-[500] ">
              Sign in to account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
