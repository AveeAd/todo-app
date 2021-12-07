import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_ACTIVE_TODOS,
  FETCH_ALL_TODOS,
  FETCH_COMPLETED_TODOS,
  UPDATE_TODO,
} from "../actions/types";

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case FETCH_ACTIVE_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case FETCH_COMPLETED_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    default:
      return state;
  }
};
