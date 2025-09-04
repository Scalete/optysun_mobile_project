import { createSlice } from '@reduxjs/toolkit';

export interface IUserParametersState {
  step: number;
}

const initialState: IUserParametersState = {
  step: 1,
};

const userParametersSlice = createSlice({
  name: 'userParameters',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const {} = userParametersSlice.actions;

export default userParametersSlice.reducer;
