import React from "react";
import { useFormik } from "formik";
import * as Components from "./Components";
import * as Yup from "yup";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("invalid email address").required("required"),
      password: Yup.string()
        .min(8, "must be at least 8 characters long")
        .required("required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Components.Form noValidate onSubmit={formik.handleSubmit}>
      <Components.Title>Sign in</Components.Title>
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
      <Components.Anchor href="#">Forgot your password?</Components.Anchor>
      <Components.Button type="submit">Sign in</Components.Button>
    </Components.Form>
  );
};

export default LoginForm;
