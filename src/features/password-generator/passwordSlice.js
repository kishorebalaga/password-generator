import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uppercase: false,
  lowercase: false,
  numbers: false,
  specialChar: false,
  passwordLength: 8,
  passwordNew: "",
  copy: "Copy",
};

export const passwordSlice = createSlice({
  name: "passwordgen",
  initialState: initialState,
  reducers: {
    passwordGenerator: (state) => {
      let password = "";
      let passwordGen = "";
      if (
        !state.uppercase &&
        !state.lowercase &&
        !state.numbers &&
        !state.specialChar
      ) {
        state.lowercase = true;
      }
      if (state.uppercase) {
        password += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      if (state.lowercase) {
        password += "abcdefghijklmnopqrstuvwxyz";
      }
      if (state.numbers) {
        password += "0123456789";
      }
      if (state.specialChar) {
        password += "'!@#$%^&*()_+-={}[]|:;'<>,.?/~';";
      }
      for (let i = 0; i < state.passwordLength; i++) {
        passwordGen += password[Math.floor(Math.random() * password.length)];
      }

      state.passwordNew = passwordGen;
    },
    lowercaseChange: (state) => {
      state.lowercase = !state.lowercase;
    },
    upperCaseChange: (state) => {
      state.uppercase = !state.uppercase;
    },
    numbersChange: (state) => {
      state.numbers = !state.numbers;
    },
    specialCharChange: (state) => {
      state.specialChar = !state.specialChar;
    },
    setPassWordLength: (state, action) => {
      state.passwordLength = action.payload;
    },
    setCopyText: (state, action) => {
      state.copy = action.payload;
    },
  },
});

export const {
  passwordGenerator,
  lowercaseChange,
  upperCaseChange,
  numbersChange,
  specialCharChange,
  setPassWordLength,
  setCopyText,
} = passwordSlice.actions;

export default passwordSlice.reducer;
