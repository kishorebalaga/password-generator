import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uppercase: false,
  lowercase: false,
  numbers: false,
  specialChar: false,
  passwordLength: 8,
  passwordNew: "",
};

export const passwordSlice = createSlice({
  name: "passwordgen",
  initialState: initialState,
  reducers: {
    passwordGenerator: (state) => {
      let password = "";
      let passwordGen = "";
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
        passwordGen +=
          password[Math.floor(Math.random() * state.passwordLength)];
      }
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
  },
});

export const {
  passwordGenerator,
  lowercaseChange,
  upperCaseChange,
  numbersChange,
  specialCharChange,
  setPassWordLength,
} = passwordSlice.actions;

export default passwordSlice.reducer;
