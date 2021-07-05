import {GET_DATA, LOG_IN, LOG_OUT, REGISTRATION} from "./types";

//Все состояния с переменными для обращения к ним
const handlers = {

  [GET_DATA]: (state, { payload }) => ({
    ...state,
    date: payload
  }),
  [REGISTRATION]: (state, { token }) => ({
    ...state,
    isLogin: localStorage.getItem("users") !== "null" ? true : false,
    user_token: JSON.parse(localStorage.getItem("users")),
  }),
  [LOG_IN]: (state, { token }) => ({
    ...state,
    isLogin: localStorage.getItem("users") !== "null" ? true : false,
    user_token: JSON.parse(localStorage.getItem("users")),
  }),
  [LOG_OUT]: (state, { payload }) => ({
    ...state,
    isLogin: false,
    user_token: null,
  }),

  DEFAULT: (state) => state,
};
export const AlertReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
