import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
  const publicValidation = (values: FormValues) => {
    console.log(values);
    router.push("/dashboard/home");
  };
  const [initialValues] = useState<FormValues>({
    email: "",
    password: "",
  });

  return (
    <div className="login-container">
      <div className="max-w-md w-full">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full mr-2"></div>
            <h1 className="text-2xl font-bold text-white">circles</h1>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Login into your account
          </h2>
          <p className="text-blue-200">Let us make the circle bigger!</p>
        </div>
        <div className="login-card">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={publicValidation}
            enableReinitialize
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
        <p className="mt-8 text-center text-sm text-gray-400">
          © 2024 Circle. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
