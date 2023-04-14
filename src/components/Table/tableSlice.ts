import { createSlice } from "@reduxjs/toolkit";
import { COLUMNS_NUMBER, EXTREMUM_MAX, EXTREMUM_MIN, ROW_NUMBER } from '../../config';

export interface TableState extends Array<number> {}

const initialState: TableState = Array.from({ length: COLUMNS_NUMBER * ROW_NUMBER }, () =>
    Math.floor(Math.random() * (EXTREMUM_MAX - EXTREMUM_MIN + 1)) + EXTREMUM_MIN
)

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {},
})

export default tableSlice.reducer
