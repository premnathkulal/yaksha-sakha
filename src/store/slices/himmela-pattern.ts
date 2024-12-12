import { createSlice } from "@reduxjs/toolkit";
import { HimmelaTerms } from "../../utils/enum";

export interface HimmelaPattern {
  id: string;
  title: string;
  type: HimmelaTerms;
  count?: number;
}

export interface PlayingTerm {
  count: number;
  term: HimmelaPattern;
}

const himmelaPatternSlice = createSlice({
  name: "himmela-pattern",
  initialState: {
    himmelaPattern: [
      // {
      //   id: "random-1",
      //   title: "Avarta",
      //   type: HimmelaTerms.Avarta,
      //   count: 1,
      // },
      // {
      //   id: "random-2",
      //   title: "Bidita",
      //   type: HimmelaTerms.Bidita,
      // },
      // {
      //   id: "random-3",
      //   title: "Avarta",
      //   type: HimmelaTerms.Avarta,
      //   count: 2,
      // },
      // {
      //   id: "random-6",
      //   title: "Muktaya",
      //   type: HimmelaTerms.Muktaya,
      // },
    ] as HimmelaPattern[],
    playingInformation: {} as PlayingTerm,
  },
  reducers: {
    setHimmelaPattern: (state, action) => {
      state.himmelaPattern = [...state.himmelaPattern, action.payload];
    },
    clearHimmelaPattern: (state, _action) => {
      state.himmelaPattern = [];
    },
    setPlayingInfo: (state, action) => {
      state.playingInformation = action.payload;
    },
  },
});

export const { setHimmelaPattern, clearHimmelaPattern, setPlayingInfo } =
  himmelaPatternSlice.actions;
export default himmelaPatternSlice.reducer;
