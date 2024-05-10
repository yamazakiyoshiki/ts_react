import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/counter2";

const store = configureStore({
  reducer: {
    counter2: reducer,
  },
});

export type Counter2State = ReturnType<typeof store.getState>;
export type Counter2Dispatch = typeof store.dispatch;

export default store;
