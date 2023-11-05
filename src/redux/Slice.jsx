import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  UserData:"",  
};

const UserDataSlice = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    addUserData: (state, action) => {
      console.log("------------action.payload:---------------😕 --  -------😕 ", action.payload);
      return {
        ...state,
        UserData: action.payload,
      };     
      // You should update the state here as needed
    },
  },
});

export const { addUserData } = UserDataSlice.actions;
export default UserDataSlice;
