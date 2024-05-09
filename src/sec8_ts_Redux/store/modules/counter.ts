import {
  Dispatch,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "..";
import { asyncCount } from "../../api/counter";

export interface CounterState {
  count: number;
  status: string;
}

const initialState: CounterState = {
  count: 0,
  status: "",
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<number>) => {
      state.count = state.count + payload;
      // const newState = { ...state };
      // newState.count = state.count + payload;
      // return newState;
    },
    minus: (state, { payload }: PayloadAction<number>) => {
      state.count = state.count - payload;
      // const newState = { ...state };
      // newState.count = state.count - payload;
      // return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAsyncWithStatus.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(addAsyncWithStatus.fulfilled, (state, { payload }) => {
        state.status = "取得済";
        state.count = state.count + payload;
      })
      .addCase(addAsyncWithStatus.rejected, (state) => {
        state.status = "エラー";
      });
  },
});

const { add, minus } = counter.actions;

const addAsyncWithStatus = createAsyncThunk(
  "counter/asyncCount",
  async (payload: number) => {
    const response = await asyncCount(payload);
    return response.data;
  }
);
const addAsync = (payload: number) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const response = await asyncCount(payload);
    dispatch(add(response.data));
  };
};

// export const selectCount = (state: RootState) => state.counter.count;
export { add, minus, addAsync, addAsyncWithStatus };
export default counter.reducer;
