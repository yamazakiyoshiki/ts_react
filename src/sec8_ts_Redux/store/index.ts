import logger from "./middleware/logger";
import reducer from "./modules/counter";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter: reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // const middlewares = getDefaultMiddleware();
    // console.log(middlewares);
    // const newMiddlewares = middlewares.concat(logger);
    // return newMiddlewares;
    getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
