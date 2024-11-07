import { configureStore } from "@reduxjs/toolkit";
import selectionReducers from "./slices/selection-slice";

const appStore = configureStore({
  reducer: {
    selections: selectionReducers,
  },
});

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
