import React, { useState } from "react";
import * as Components from "./Components";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
const LoginSignUpComponent = (props) => {
  const [signIn, setSignIn] = useState(true);

  return (
    <Components.Container>
      <Components.SignUpContainer signIn={signIn}>
        <SignupForm signupHandler={props.signupHandler} />
      </Components.SignUpContainer>
      <Components.SignInContainer signIn={signIn}>
        <LoginForm loginHandler={props.signinHandler} />
      </Components.SignInContainer>

      <Components.OverlayContainer signIn={signIn}>
        <Components.Overlay signIn={signIn}>
          <Components.LeftOverlayPannel signIn={signIn}>
            <Components.Title>Already registered ?</Components.Title>
            <Components.Paragraph>You can sign in here.</Components.Paragraph>
            <Components.GhostButton onClick={() => setSignIn(true)}>
              Sign in
            </Components.GhostButton>
          </Components.LeftOverlayPannel>

          <Components.RightOverlayPannel signIn={signIn}>
            <Components.Title>First time here ?</Components.Title>
            <Components.Paragraph>Create new account.</Components.Paragraph>
            <Components.GhostButton onClick={() => setSignIn(false)}>
              Sign up
            </Components.GhostButton>
          </Components.RightOverlayPannel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};

export default LoginSignUpComponent;
