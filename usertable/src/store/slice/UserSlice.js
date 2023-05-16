import { createSlice } from "@reduxjs/toolkit";

/** #11 */
import { createAction } from "@reduxjs/toolkit";
export const removeAllUsers = createAction("users/removeAllUsers");

/** #3 */
const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    /** micro(mini) reduders */
    addUser(state, action) {
      state.push(action.payload);
      // console.log(action);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
      // console.log(action);
    },
    // removeAllUsers(state, action) {
    //   // console.log(action);
    //   // state.splice(0, state.length);
    //   return [];
    // },
  },

  // /** #10 */
  // extraReducers: (builder) => {
  //   builder.addCase(usersSlice.actions.removeAllUsers, () => {
  //     return [];
  //   });
  // },

  /** #11 */
  extraReducers: (builder) => {
    builder.addCase(removeAllUsers, () => {
      return [];
    });
  },
});

// console.log(usersSlice.actions);
// action creators
// export const { addUser, removeUser, removeAllUsers } = usersSlice.actions;
export const { addUser, removeUser } = usersSlice.actions; /** #11 */

export default usersSlice.reducer;
