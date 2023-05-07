import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type IUserData = {
  fullName?: string | "";
  email?: string | "";
  city?: string | "";
  address?: string | "";
  phoneNumber?: string | "";
};
export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    data: {} as IUserData,
  },
  reducers: {
    setUser: (state, action: PayloadAction<IUserData>) => {
      state.data = { ...state.data, ...action.payload };
      console.log("Action: " + state.data);
    },
  },
  //   extraReducers(builder) {
  //       builder.addCase(setData, (state, action) => {
  //         state.data = {...state.data, }
  //       });
  //   },
});
export function setCounter(value: object) {
  return {
    type: "types.SETCOUNTER",
    value, // it will add key `value` with argument value.
  };
}
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
