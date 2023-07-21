import { login as loginAction, logout as logoutAction } from "./authSlice";

const mockLoginRequest = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        email,
      };
      resolve(user);
    }, 1000);
  });
};

export const login = (email, password) => async (dispatch) => {
  try {
    const user = await mockLoginRequest(email, password);
    dispatch(loginAction(user));
  } catch (error) {
    console.error(error.message);
  }
};

const mockLogoutRequest = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

export const logout = () => async (dispatch) => {
  try {
    await mockLogoutRequest();
    dispatch(logoutAction());
  } catch (error) {
    console.error(error.message);
  }
};
