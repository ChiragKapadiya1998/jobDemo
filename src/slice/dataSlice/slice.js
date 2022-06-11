import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userData: [],
  isLoad: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getAllUsersRequest: (state, action) => {
      return {...state, userData: null, isLoad: true}
    },
    getAllUsersSuccsess: (state, action) => {
      return {...state, userData: action.payload, isLoad: false}
    },
    getAllUsersFail: (state, action) => {
      return {...state, userData: null, isLoad: true}
    },
  },
});

export const {getAllUsersRequest, getAllUsersSuccsess, getAllUsersFail} =
  userSlice.actions;

export default userSlice.reducer;
