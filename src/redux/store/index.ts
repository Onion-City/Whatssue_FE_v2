import { configureStore } from "@reduxjs/toolkit";
import clubReducer from "../slices/club";

const makeStore = () =>
  configureStore({
    reducer: {
      club: clubReducer,
    },
  });
export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const wrapper = createWrapper(makeStore);
