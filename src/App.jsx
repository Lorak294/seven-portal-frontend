import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styling/themes";
import LandingPage from "./components/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import HomePage from "./components/HomePage/HomePage";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display:wght@800&display=swap');

* {
  box-sizing: border-box;
}

body {
  background: #f6f5f7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Nunito', sans-serif;
  //height: 100vh;
  margin: 0;
}
`;

function App() {
  let currTheme = lightTheme;

  document.body.style = `background: ${currTheme.colors.background};`;
  return (
    <>
      <ThemeProvider theme={currTheme}>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/cards" element={<div>Hello hea are the cards.</div>} />
          <Route
            path="/profile/:userId"
            element={<ProfilePage></ProfilePage>}
          />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
