import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface FormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignInPage = () => {
  const router = useRouter();

  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const handleLogin = async (values: FormValues) => {
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.status === 401) {
        toast.error("Invalid email or password", {
          position: "top-right",
          autoClose: 3000,
        });
        return;
      }

      if (!response.ok || !data.access_token) {
        toast.error("An error occurred");
        return;
      }

      localStorage.setItem("token", data.access_token);
      router.push("/dashboard/home");
    } catch (err) {
      toast.error("Error connecting to the server");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center p-4">
      {/* background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* principal container */}
      <div className="w-full max-w-6xl flex items-center justify-between relative">
        {/* left side */}
        <div className="w-full max-w-md text-white p-8">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-6 h-6 border-2 border-blue-500 rounded-full"></div>
            <span className="text-xl font-semibold">circles</span>
          </div>

          <h1 className="text-4xl font-bold mb-4">
            Login into
            <br />
            your account
          </h1>
          <p className="text-gray-400">Let us make the circle bigger!</p>
        </div>

        {/* right side */}
        <div className="w-full max-w-md">
          <div className="bg-white login-card rounded-2xl p-8 shadow-xl">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              <Form>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="jane.doe@mail.com"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="mt-4 text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link
                      href="/login/sign-up"
                      className="btn-small font-bold text-gray-600 hover:underline"
                    >
                      Sign up
                    </Link>
                  </p>
                  <button
                    type="submit"
                    className="w-1/3 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Login
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-gray-400 text-sm">
        © 2024 Circle. All Rights Reserved.
      </div>
    </div>
  );
};

export default SignInPage;
