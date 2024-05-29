import { ErrorMessage, Field, Form, Formik } from "formik";
import { LoginInitials, loginValuesValidation } from "../../models/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/store";

// Login initial values
const loginInitialValues = new LoginInitials();

function Login() {
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login);

  // Handle login
  const handleLogin = async (values, { setSubmitting }) => {
    await login(values, { setSubmitting, navigate });
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <ToastContainer />
      <div className="border border-tertiary rounded-lg py-7 px-6 xxs:w-[90%] xsm:w-[70%] sm:w-[60%] md:w-[45%] lg:w-[35%] xl:w-[30%] 2xl:w-[22%] shadow-lg shadow-secondary ">
        <div>
          <p className="font-[500] text-2xl">Welcome back!</p>
          <p className="text-secondary font-[430]">
            Sign in to your account to continue
          </p>
        </div>
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValuesValidation}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form>
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

              <div className="w-full">
                <button
                  type="submit"
                  className="w-full bg-primary text-white rounded-lg py-2 font-[500] "
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing In..." : "Sign In"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="text-center mt-10 py-3 border border-tertiary rounded-lg shadow-sm shadow-secondary hover:shadow-lg hover:shadow-secondary">
          <p>
            <span className="text-secondary font-[430]">Not a member?</span>{" "}
            <Link to="/auth/signup" className="font-[500] ">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
