import { createSlice } from "@reduxjs/toolkit";

const balanceSlice = createSlice({
  name: "account",
  initialState: {
    balance: Number(0),
    loan: 0,
  },
  reducers: {
    deposit: (state, action) => {
      state.balance = Number(state.balance) + Number(action.payload);
    },
    withdraw: (state, action) => {
      state.balance = Number(state.balance) - Number(action.payload);
    },
    applyLoan: (state, action) => {
      state.balance += Number(action.payload);
      state.loan += Number(action.payload);
    },
    payLoan: (state, action) => {
      state.loan -= Number(action.payload);
    },
  },
});

export const { deposit, withdraw, applyLoan, payLoan } = balanceSlice.actions;

export default balanceSlice.reducer;
