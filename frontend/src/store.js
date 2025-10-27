import { configureStore, createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "students",
  initialState: {
    list: [
      { name: "Aarav", marks: 85 },
      { name: "Isha", marks: 92 },
      { name: "Rohan", marks: 76 },
      { name: "Meera", marks: 88 },
    ],
  },
  reducers: {
    sortAsc: (state) => {
      state.list.sort((a, b) => a.marks - b.marks);
    },
    sortDesc: (state) => {
      state.list.sort((a, b) => b.marks - a.marks);
    },
  },
});

export const { sortAsc, sortDesc } = studentSlice.actions;
export const store = configureStore({ reducer: studentSlice.reducer });
