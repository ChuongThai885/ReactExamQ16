import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.value = state.value + 1;
    },
    decrease: (state, action) => {
      state.value = state.value - 1;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;

export const selectCounterValue = (state: { counter: CounterState }) =>
  state.counter.value;

export default counterSlice.reducer;
