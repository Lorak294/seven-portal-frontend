import React from "react";
import Navbar from "../Navbar/Navbar";
import authService from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomepageSlider from "./Slider/HomepageSlider";

const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <TopSection>
        <HomepageSlider />
      </TopSection>
      <button
        onClick={() => {
          authService.logOut();
          navigate("/");
        }}
      >
        Log out
      </button>
    </>
  );
};

export default HomePage;
