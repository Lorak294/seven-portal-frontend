import React from "react";
import styled from "styled-components";
import { GiMountaintop } from "react-icons/gi";

const Container = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const MenuItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: ${(props) => props.theme.colors.maintext};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.highlight};
    //color: transparent;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <GiMountaintop size="2em" />
        </Logo>
      </Left>
      <Center>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Definitions</MenuItem>
          <MenuItem>About</MenuItem>
        </Menu>
      </Center>
      <Right>RIGHT</Right>
    </Container>
  );
};

export default Navbar;
