import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: [],
};
const UserSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    AddUser(state, action) {
      state.user = action.payload;
    },
  },
});
export default UserSlice.reducer;
export const { AddUser } = UserSlice.actions;
