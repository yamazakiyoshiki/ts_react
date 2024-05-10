import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialStateType = {
  count: number;
};

const initialState: InitialStateType = {
  count: 0,
};

const counter2 = createSlice({
  name: "counter2",
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<number>) => {
      state.count = state.count + payload;
    },
    minus: (state, { payload }: PayloadAction<number>) => {
      state.count = state.count - payload;
    },
  },
});

const { add, minus } = counter2.actions;

export { add, minus };
export default counter2.reducer;
