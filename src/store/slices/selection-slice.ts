import { createSlice } from "@reduxjs/toolkit";

const selectionSlice = createSlice({
  name: "selections",
  initialState: {
    selectedTanpuraType: "",
    selectedPitch: "",
    selectedInstruments: {
      tanpuraSelected: false,
      talaSelected: false,
      chendeSelected: false,
    },
  },
  reducers: {
    selectTanpura: (state, action) => {
      state.selectedTanpuraType = action.payload;
    },
    selectPitch: (state, action) => {
      state.selectedPitch = action.payload;
    },
    selectInstrument: (state, action) => {
      state.selectedInstruments = action.payload;
    },
  },
});

export const { selectInstrument, selectPitch, selectTanpura } =
  selectionSlice.actions;
export default selectionSlice.reducer;
