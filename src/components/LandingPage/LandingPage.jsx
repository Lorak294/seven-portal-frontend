import React from "react";
import styled from "styled-components";
import landingPageImage from "./landingpageImage.jpg";
import LoginSignUpComponent from "./LoginSignUpComponent/LoginSignUpComponent";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  align-content: center;
  background-image: url(${landingPageImage});
  background-size: cover;
`;

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  z-index: 1000;
`;

const Left = styled.div`
  width: 55%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const Right = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-direction: column;
  padding: 75px;
`;

const Title = styled.h1`
  font-size: 100px;
  font-family: "Poppins", sans-serif;
  letter-spacing: 5px;
  color: ${(props) => props.theme.colors.maintext};
  text-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const Paragraph = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.colors.maintext};
  text-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const LandingPage = () => {
  return (
    <>
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>

      <Container>
        <Left>
          <LoginSignUpComponent />
        </Left>
        <Right>
          <Title>Welcome to Seven Portal</Title>
          {/* <Paragraph>
            Here you can see all the things the 7 boys had acomplished so far.
            Sign in or create new account to gain access to our dictionary full
            of memories and countless inside jokes
          </Paragraph> */}
        </Right>
      </Container>
      <Footer />
    </>
  );
};

export default LandingPage;
