import axios from "axios";
import { ADD_TODO, DELETE_TODO, FETCH_TODOS, UPDATE_TODO } from "./types";

export const updateTodo = (url, data) => (dispatch) => {
  axios({
    url,
    method: "PUT",
    data,
  }).then((res) => {
    console.log(res);
    dispatch({ type: UPDATE_TODO, payload: res.data });
  });
};

export const deleteTodo = (url, id) => (dispatch) => {
  axios({ url, method: "DELETE" }).then((res) => {
    dispatch({ type: DELETE_TODO, payload: id });
  });
};

export const addTodo = (url, data) => (dispatch) => {
  axios({ url, method: "POST", data }).then((res) => {
    dispatch({ type: ADD_TODO, payload: res.data });
  });
};
