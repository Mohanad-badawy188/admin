import { loginFail, loginStart, loginSuccess } from "./reduxUser";
import axios from "axios";
import {
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
} from "./reduxProducs";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await axios({
      method: "post",
      url: "http://localhost:5000/api/auth/login",
      data: user,
    });

    dispatch(loginSuccess(res.data));
  } catch (e) {
    dispatch(loginFail());
  }
};
export const getProduct = async (dispatch, user) => {
  dispatch(getProductStart());

  try {
    const res = await axios({
      method: "get",
      url: "http://localhost:5000/api/product",
    });

    dispatch(getProductSuccess(res.data));
  } catch (e) {
    dispatch(getProductFailure());
  }
};
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  const TOKEN = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).user.accessToken;

  try {
    const res = await axios({
      method: "delete",
      url: `http://localhost:5000/api/product/${id}`,

      headers: { token: `Bearer ${TOKEN}` },
    });

    dispatch(deleteProductSuccess(id));
  } catch (e) {
    dispatch(deleteProductFailure());
  }
};
