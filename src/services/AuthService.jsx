import axios from "axios";
import { API_URL } from "../config";

const signIn = async (email, password) => {
  try {
    const response = await axios.post(API_URL + "api/Auth/Login", {
      email,
      password,
    });

    // SUCCEED
    localStorage.setItem("authToken", response.data.token);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    return {
      success: true,
      message: "Successfully logged in.",
    };

    //FAILED
  } catch (err) {
    return {
      success: false,
      message: err.response ? "Invalid credentials" : err.message,
    };
  }
};

const signUp = async (username, email, password) => {
  try {
    await axios.post(API_URL + "api/Auth/Register", {
      username,
      email,
      password,
    });

    // SUCCEED
    return {
      success: true,
      message:
        "Successfully registered, please confirm Your email addres via link we have sent to Your eamil address. After that You will be able to sign in.",
    };

    // FAILED
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      return {
        success: false,
        message: JSON.stringify(err.response.data.errors),
      };
    } else {
      return {
        success: false,
        message: err.message,
      };
    }
  }
};

const logOut = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("refreshToken");
};

const authService = {
  signIn,
  signUp,
  logOut,
};

export default authService;
