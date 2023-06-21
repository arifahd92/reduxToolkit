import { createSlice } from "@reduxjs/toolkit";
//all the methods are key of userSlice.action
const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      console.log("object");
      state.push(action.payload);
    },

    removeAllUser(state, action) {
      state.splice(0, state.length);
    },
    deleteUser(state, action) {
      //state.pop(action.id);
      console.log(state[0]);
      state.splice(action.ind, 1);
    },
  },
});
console.log(userSlice.actions);
//an object of above methods

export default userSlice.reducer;
export const { addUser, deleteUser, removeAllUser } = userSlice.actions;
