import React from "react";
//import { useFormik } from "formik";
import * as Components from "./Components";

// const SubmitButton = styled.button`
//   //font-family: "Open Sans", sans-serif;
//   font-family: inherit;
//   font-size: 16px;
//   font-weight: bolder;
//   width: 100%;
//   padding: 15px;

//   border: 2px solid ${(props) => props.theme.colors.primary};
//   border-radius: 7px;
//   border-width: 3px;
//   color: ${(props) => props.theme.colors.background};
//   background-color: ${(props) => props.theme.colors.primary};

//   &:hover {
//     color: ${(props) => props.theme.colors.primary};
//     background-color: ${(props) => props.theme.colors.secondary};
//   }
// `;

// const FormComponent = styled.form`
//   //box-sizing: border-box;
//   margin: auto;
//   //background-color: orange;
//   text-align: left;
//   width: 60%;
//   input {
//     padding: 10px;
//     margin-bottom: 15px;
//     margin-top: 5px;
//     border: 0;
//     border-radius: 7px;
//     width: 100%;
//     font-family: inherit;
//     font-size: inherit;
//     display: inline-block;
//     box-sizing: border-box;
//   }
//   label {
//     font-weight: bold;
//   }
// `;

// const LoginForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });

//   return (
//     <FormComponent onSubmit={formik.handleSubmit}>
//       <h1>LOGIN FORM</h1>
//       <label htmlFor="email">Email Address:</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />

//       <label htmlFor="password">Password:</label>
//       <input
//         id="password"
//         name="password"
//         type="password"
//         onChange={formik.handleChange}
//         value={formik.values.password}
//       />

//       <SubmitButton type="submit">Submit</SubmitButton>
//     </FormComponent>
//   );
// };

const LoginForm = () => {
  return (
    <Components.Form>
      <Components.Title>Sign in</Components.Title>
      <Components.Input type="email" placeholder="Email" />
      <Components.Input type="password" placeholder="Password" />
      <Components.Anchor href="#">Forgot your password?</Components.Anchor>
      <Components.Button type="submit">Sign in</Components.Button>
    </Components.Form>
  );
};

export default LoginForm;
