import { useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name should be at least 3 characters")
    .max(20, "Name should be less than 20 characters")
    .matches(
      /^[a-zA-Z\s]+$/,
      "Name should not contain any numbers or special characters"
    )
    .required("Name is required"),
  lastName: Yup.string()
    .min(3, "Last name should be at least 3 characters")
    .max(20, "Last name should be less than 20 characters")
    .matches(
      /^[a-zA-Z\s]+$/,
      "Last name should not contain any numbers or special characters"
    )
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be at least 8 characters")
    .matches(/[A-Z]/, "Password should contain at least one capital letter")
    .matches(/\d/, "Password should contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/g,
      "Password should contain at least one special character"
    )
    .required("Password is required"),
});

export default function RegistrationForm() {
  const router = useRouter();
  const [initialValues] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
  });

  const publicValidation = (values: FormValues) => {
    console.log(values);
    router.push("/dashboard/home");
  };

  return (
    <div className="login-container">
      <div className="max-w-md w-full">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full mr-2"></div>
            <h1 className="text-2xl font-bold text-white">circles</h1>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Sign Up a new account
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
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Jane"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <Field
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
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
                  className="block text-sm font-medium text-gray-700"
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

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
        <p className="mt-8 text-center text-sm text-gray-400">
          © 2024 Circle. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
