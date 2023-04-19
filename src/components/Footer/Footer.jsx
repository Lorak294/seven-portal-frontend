import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BiCopyright } from "react-icons/bi";

const FooterContainer = styled.div`
  margin-top: auto;
  display: flex;
  height: 10%;
  width: 100%;
  justify-content: space-around;
  align-content: center;
  color: #f0f9ff;
  background-color: #282d32;
  background-size: cover;
`;

const Column = styled.div`
  padding: 20px;
  text-align: center;
`;

const IconLink = styled.div`
  display: flex;
  //align-content: space-around;
  justify-content: space-evenly;
  justify-content: left;
  padding: 5px;
`;

const Link = styled.a`
  color: #f0f9ff;
  text-decoration: none;
  padding: 7px;
  &:hover {
    color: black;
    background-color: #f0f9ff;
    padding: 7px;
    border-radius: 15px;
  }
  margin-left: 10px;
`;

const Text = styled.a`
  color: #f0f9ff;
  padding: 7px;
  margin-left: 10px;
`;

const BottomText = styled.p`
  color: #8b8b8b;
  font-size: smaller;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Column>
          <h3>Contact</h3>
          <p>Created by Karol Kącki 2023</p>
          <IconLink>
            <FaGithub size="2em" />{" "}
            <Link href="https://github.com/Lorak294">github.com/Lorak294</Link>
          </IconLink>
          <IconLink>
            <FiMail size="2em" /> <Text>karol.kacki2@gmail.com</Text>
          </IconLink>
          <BottomText>
            Copyright <BiCopyright /> 2023
          </BottomText>
        </Column>
      </FooterContainer>
    </>
  );
};
export default Footer;
