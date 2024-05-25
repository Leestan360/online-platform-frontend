import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import config from "../config";
import { toast } from "react-toastify";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      login: async (values, { setSubmitting, navigate }) => {
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

          // Set token
          const { jwt: token } = response.data;
          set({ token });

          // Fetch user profile
          const userData = await axios.get(`${config.apiBaseUrl}/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          // Set user
          set({ user: userData.data });

          // Display login success message
          toast.success(response.data.message);

          // Navigate to homepage
          navigate("/");
        } catch (error) {
          // Display login error message
          const errorMessage = error.response?.data?.message || "An error occurred. Please try again.";
          toast.error(errorMessage);
        } finally {
          setSubmitting(false);
        }
      },
      signup: async (values, { setSubmitting, navigate }) => {
        setSubmitting(true);
    
        try {
          const payload = {
            user: {
              username: values.username,
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

          // Set token 
          const { jwt: token } = response.data;
          set({ token });


          // Fetch user profile
          const userData = await axios.get(`${config.apiBaseUrl}/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          // Set user
          set({ user: userData.data });
    
          // Display signup success message and navigate to home page
          toast.success(response.data.message || "Signup successful!");
          navigate("/");
          
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
      },
      logout: () => {
        set({ user: null, token: null });
        toast.success("Logged out successfully.");
      },
    }),
    {
      name: "auth",
      // getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
