import { createSlice } from "@reduxjs/toolkit";
import { COLUMNS_NUMBER, EXTREMUM_MAX, EXTREMUM_MIN, ROW_NUMBER } from '../../config';

export interface BoxState {
  value: number,
  visible: boolean,
}

export interface TableState extends Array<BoxState> {}

const initialState: TableState = Array.from({ length: COLUMNS_NUMBER * ROW_NUMBER }, () =>
  ({
    value: Math.floor(Math.random() * (EXTREMUM_MAX - EXTREMUM_MIN + 1)) + EXTREMUM_MIN,
    visible: true,
  })
);

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
      allVisible: (state) => {
          state.map(box => box.visible = true)
      },
      positiveVisible: (state) => {
          state.map(box => box.visible = box.value > 0)
      },
      negativeVisible: (state) => {
          state.map(box => box.visible = box.value < 0)
      },
  },
})

export const { allVisible, positiveVisible, negativeVisible } = tableSlice.actions

export default tableSlice.reducer
