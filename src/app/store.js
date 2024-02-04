import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import passwordGen from "../features/password-generator/passwordSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    password: passwordGen,
  },
});
