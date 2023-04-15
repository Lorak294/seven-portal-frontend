import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styling/themes";
import Navbar from "./components/Navbar";

const GlobalStyle = createGlobalStyle`
  body {
    //background-color: ${(props) => props.theme.colors.background};
    background: black; // not working
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    *{
      font-family: 'Poppins', sans-serif  ;
    }
  }
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  height: 100vh;
`;

function App() {
  let currTheme = lightTheme;

  document.body.style = `background: ${currTheme.colors.background};`;
  return (
    <>
      <ThemeProvider theme={currTheme}>
        <GlobalStyle />
        <Container>
          <Navbar />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
