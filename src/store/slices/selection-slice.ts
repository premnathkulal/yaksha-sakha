import { createSlice } from "@reduxjs/toolkit";
import { MusicNotation } from "../../constants/UiData";

const selectionSlice = createSlice({
  name: "selections",
  initialState: {
    selectedTanpuraType: "",
    selectedPitchInfo: MusicNotation[5],
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
      state.selectedPitchInfo = action.payload;
    },
    selectInstrument: (state, action) => {
      state.selectedInstruments = action.payload;
    },
  },
});

export const { selectInstrument, selectPitch, selectTanpura } =
  selectionSlice.actions;
export default selectionSlice.reducer;
