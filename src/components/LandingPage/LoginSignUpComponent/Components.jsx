import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 678px;
  height: 400px;
  max-width: 100%;
  min-width: 400px;
  margin: 5vw;
  /* @media (orientation: portrait) {
    //border-radius: 0;
    margin: 5vw;
  } */
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${(props) =>
    props.signIn === true
      ? null
      : `
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
    `}
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) =>
    props.signIn === true
      ? null
      : `
      transform: translateX(100%);
    `}
`;

export const Form = styled.form`
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: smaller;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

export const Input = styled.input`
  background-color: #eee;
  border-radius: 20px;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.secondary};
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  margin-top: 10px;
  /* &:active {
    transform: scale(0.95);
  } */
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.15);
    transition: transform 0.1s ease-in-out;
  }
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    background-color: #ffffff;
    transition: transform 0.2s ease-in;
  }
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) => (props.signIn === true ? null : `transform: translateX(-100%);`)}
`;

export const Overlay = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  background: -webkit-linear-gradient(
    to right,
    ${(props) => props.theme.colors.gradient1},
    ${(props) => props.theme.colors.gradient2}
  );
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.gradient1},
    ${(props) => props.theme.colors.gradient2}
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) => (props.signIn === true ? null : `transform: translateX(50%);`)}
`;

export const OverlayPannel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPannel = styled(OverlayPannel)`
  transform: translateX(-20%);
  ${(props) => (props.signIn === true ? null : `transform: translateX(0);`)}
`;
export const RightOverlayPannel = styled(OverlayPannel)`
  right: 0;
  transform: translateX(0);
  ${(props) => (props.signIn === true ? null : `transform: translateX(20%);`)}
`;
