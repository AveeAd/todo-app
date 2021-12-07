import axios from "axios";
import {
  FETCH_ACTIVE_TODOS,
  FETCH_ALL_TODOS,
  FETCH_COMPLETED_TODOS,
} from "./types";

export const fetchAllTodos = () => (dispatch) => {
  axios.get("http://localhost:5000/todos").then((res) =>
    dispatch({
      type: FETCH_ALL_TODOS,
      payload: res.data,
    })
  );
};
export const fetchActiveTodos = () => (dispatch) => {
  axios.get("http://localhost:5000/todos?completed=false").then((res) =>
    dispatch({
      type: FETCH_ACTIVE_TODOS,
      payload: res.data,
    })
  );
};
export const fetchCompletedTodos = () => (dispatch) => {
  axios.get("http://localhost:5000/todos?completed=true").then((res) =>
    dispatch({
      type: FETCH_COMPLETED_TODOS,
      payload: res.data,
    })
  );
};
