import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    JobTitleData: [],  
};

const JobTitleSlice  = createSlice({
  name: "JobTitleSlice",
  initialState,
  reducers: {
    addJobTitle: (state, action) => {
      // You can handle the action payload here
      console.log("------------action.payload:---------------😕 --  -------😕 ", action.payload);
      // You should update the state here as needed
    },
  },
});

export const { addJobTitle } = JobTitleSlice.actions;
export default JobTitleSlice;
