import axios from "axios";

import { loginFailure, loginStart, loginSuccess, logout } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const config = {
      header: {
          "content-type": "application/json"
      }
  }
    const {data} = await axios.post("/api/userauth/loginUser", user, config);
    dispatch(loginSuccess(data));
    
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logoutuser = async(dispatch) => {
  dispatch(logout());
}