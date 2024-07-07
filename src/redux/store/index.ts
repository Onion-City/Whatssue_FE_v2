import { configureStore } from "@reduxjs/toolkit";
import clubReducer from "../slices/club";

// Ducks 패턴 적용!
export const store = configureStore({
  reducer: {
    club: clubReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
