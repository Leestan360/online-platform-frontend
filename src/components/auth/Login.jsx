import { ErrorMessage, Field, Form, Formik } from "formik";
import { LoginInitials, loginValuesValidation } from "../../models/login";
import axios from "axios";
import config from "../../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Login initial values
const loginInitialValues = new LoginInitials();

function Login() {
  // Handle login
  const handleLogin = async (values, { setSubmitting }) => {
    setSubmitting(true);

    try {
      const payload = {
        user: {
          email: values.email,
          password: values.password,
        },
      };

      const response = await axios.post(`${config.apiBaseUrl}/login`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Display login success message
      toast.success(response.data.message);
    } catch (error) {
      // Display login error message
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValuesValidation}
        onSubmit={handleLogin}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="">
              <Field
                name="email"
                type="email"
                placeholder="Email address"
                className=""
              />
              <p className="text-red-500">
                <ErrorMessage name="email" />
              </p>
            </div>

            <div className="">
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className=""
              />
              <p className="text-red-500">
                <ErrorMessage name="password" />
              </p>
            </div>

            <div className="">
              <button type="submit" className="" disabled={isSubmitting}>
                {isSubmitting ? "Signing In..." : "Sign In"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
