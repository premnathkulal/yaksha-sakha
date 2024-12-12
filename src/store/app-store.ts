import { configureStore } from "@reduxjs/toolkit";
import selectionReducers from "./slices/selection-slice";
import himmelaPatternReducers from "./slices/himmela-pattern";

const appStore = configureStore({
  reducer: {
    selections: selectionReducers,
    himmelaPattern: himmelaPatternReducers,
  },
});

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
