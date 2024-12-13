import { configureStore } from "@reduxjs/toolkit";
import selectionReducers from "./slices/selection-slice";
import himmelaPatternReducers from "./slices/himmela-pattern";
import playControlReducer from "./slices/play-control";

const appStore = configureStore({
  reducer: {
    selections: selectionReducers,
    himmelaPattern: himmelaPatternReducers,
    playControl: playControlReducer,
  },
});

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
