import { createSlice } from '@reduxjs/toolkit';

// Designed to hold the different lifecycle states of the Hexagon reveal.
// In this case we usually just want to know if something has happened
// yet - so we go with a set of booleans rather than a sequential single variable.

export interface HexagonState {
   hasInitialized: boolean;
   hasFilledScreen: boolean;
   hasRevealed: boolean;
}

const initialState: HexagonState = {
   hasInitialized: false,
   hasFilledScreen: false,
   hasRevealed: false,
};

export const hexagonSlice = createSlice({
   name: 'hexagon',
   initialState,
   reducers: {
      initialized: state => {
         console.log('==hasInitialized==');
         state.hasInitialized = true;
      },
      filledScreen: state => {
         console.log('==hasFilledScreen==');
         state.hasFilledScreen = true;
      },
      revealed: state => {
         console.log('==hasRevealed==');
         state.hasRevealed = true;
      },
   },
});

export const { initialized, filledScreen, revealed } = hexagonSlice.actions;

export default hexagonSlice.reducer;
