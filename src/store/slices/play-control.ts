import { createSlice } from "@reduxjs/toolkit";

const playControl = createSlice({
  name: "play-control",
  initialState: {
    isPlayingTanpura: false,
  },
  reducers: {
    setIsPlayingTanpura: (state, action) => {
      state.isPlayingTanpura = action.payload;
    },
  },
});

export const { setIsPlayingTanpura } = playControl.actions;
export default playControl.reducer;
