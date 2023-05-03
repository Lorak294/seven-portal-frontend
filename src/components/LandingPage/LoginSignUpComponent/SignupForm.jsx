import React from "react";
import * as Components from "./Components";
import * as Yup from "yup";
import { useFormik } from "formik";

const SignupForm = (props) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(2, "must be at least 2 characters long")
        .max(15, "must be maximum 15 characters long")
        .required("required"),
      email: Yup.string().email("invalid email address").required("required"),
      password: Yup.string()
        .min(8, "must be at least 8 characters long")
        .required("required"),
    }),
    onSubmit: props.signupHandler,
  });

  return (
    <Components.Form noValidate onSubmit={formik.handleSubmit}>
      <Components.Title>Create Account</Components.Title>
      <Components.Input
        id="username"
        type="text"
        {...formik.getFieldProps("username")}
        placeholder="Username"
      />
      {formik.touched.username && formik.errors.username ? (
        <Components.ErrorMessage>
          {formik.errors.username}
        </Components.ErrorMessage>
      ) : null}
      <Components.Input
        id="email"
        type="email"
        {...formik.getFieldProps("email")}
        placeholder="Email"
      />
      {formik.touched.email && formik.errors.email ? (
        <Components.ErrorMessage>{formik.errors.email}</Components.ErrorMessage>
      ) : null}
      <Components.Input
        id="password"
        type="password"
        {...formik.getFieldProps("password")}
        placeholder="Password"
      />
      {formik.touched.password && formik.errors.password ? (
        <Components.ErrorMessage>
          {formik.errors.password}
        </Components.ErrorMessage>
      ) : null}
      <Components.Button type="submit">Sign up</Components.Button>
    </Components.Form>
  );
};

export default SignupForm;
