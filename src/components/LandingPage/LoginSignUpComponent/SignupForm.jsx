import React from "react";
import styled from "styled-components";
import * as Components from "./Components";

const SignupForm = () => {
  return (
    <Components.Form>
      <Components.Title>Create Account</Components.Title>
      <Components.Input type="text" placeholder="Username" />
      <Components.Input type="email" placeholder="Email" />
      <Components.Input type="password" placeholder="Password" />
      <Components.Button type="submit">Sign up</Components.Button>
    </Components.Form>
  );
};

export default SignupForm;
