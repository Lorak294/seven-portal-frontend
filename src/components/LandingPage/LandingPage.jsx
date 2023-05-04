import React, { useState } from "react";
import styled from "styled-components";
import landingPageImage from "./landingpageImage.jpg";
import LoginSignUpComponent from "./LoginSignUpComponent/LoginSignUpComponent";
import PopUp from "../PopUp/PopUp";
import axios from "axios";
import { API_URL } from "../../config";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  align-content: center;
  background-image: url(${landingPageImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (orientation: portrait) {
    flex-direction: column;
    height: fit-content;
    text-align: center;
  }
`;

const Left = styled.div`
  width: 55%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media (orientation: portrait) {
    width: 100%;
    order: 2;
  }
`;

const Right = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-direction: column;
  padding: 75px;

  @media (orientation: portrait) {
    margin-top: 10vh;
    order: 1;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: clamp(60px, 6vw, 100px);
  font-family: "Poppins", sans-serif;
  letter-spacing: 5px;
  color: ${(props) => props.theme.colors.maintext};
  text-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const LandingPage = () => {
  const [visiblePopup, setVisiblePopUp] = useState(false);
  const [popupContent, setPopupContent] = useState({});
  const togglePopup = () => {
    setVisiblePopUp((prev) => !prev);
  };

  const SignInHandler = async (values) => {
    try {
      const response = await axios.post(API_URL + "api/Auth/Login", values);
      console.log(response);
    } catch (err) {
      console.log(err.response.data.errors);
      setPopupContent({ title: "Error", text: err.response.data.errors });
      togglePopup();
    }
  };

  const SignUpHandler = async (values) => {
    try {
      const response = await axios.post(API_URL + "api/Auth/Register", values);
      console.log(response);
      setPopupContent({
        title: "Success",
        text: "Your account has been successfuly created. Before logging in make sure to confitm Your email address through the message we have just sent to Your inbox.",
      });
      togglePopup();
    } catch (err) {
      console.log(err.response.data.errors);
      setPopupContent({ title: "Error", text: err.response.data.errors });
      togglePopup();
    }
  };

  return (
    <>
      <PopUp visible={visiblePopup} toggle={togglePopup}>
        <h1>{popupContent.title}</h1>
        <p>{popupContent.text}</p>
      </PopUp>
      <Container>
        <Left>
          <LoginSignUpComponent
            signinHandler={SignInHandler}
            signupHandler={SignUpHandler}
          />
        </Left>
        <Right>
          <Title>Welcome to Seven Portal</Title>
        </Right>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default LandingPage;
