import React from "react";
import styled from "styled-components";
import { GiMountaintop } from "react-icons/gi";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 10%;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  z-index: 1000;
`;

const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 2vw;
`;
const Right = styled.div`
  margin-right: 2vw;
`;
const Center = styled.div``;

const Logo = styled.h1`
  font-size: 20px;
  text-decoration: dashed;
  color: ${(props) => props.theme.colors.maintext};
  cursor: pointer;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const LinkItem = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.maintext};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.highlight};
    //color: transparent;
  }
`;
const Navbar = () => {
  const userId = "313";
  return (
    <Container>
      <Left>
        <Logo>
          <GiMountaintop size="2em" />
        </Logo>
      </Left>
      <Center>
        <Menu>
          <li>
            <LinkItem to="/home">Home</LinkItem>
          </li>
          <li>
            <LinkItem to="/cards">Cards</LinkItem>
          </li>
          <li>
            <LinkItem to="/">About</LinkItem>
          </li>
        </Menu>
      </Center>
      <Right>
        <LinkItem to={`/profile/${userId}`}>My Profile</LinkItem>
      </Right>
    </Container>
  );
};

export default Navbar;
