import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import hexagonReducer from '../features/hexagons/hexagonSlice';

export const store = configureStore({
  reducer: {
    hexagon: hexagonReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
