import { createSlice } from '@reduxjs/toolkit';

export interface IUserParametersState {
  step: UserParametersSteps;
  descriptionInfo: string;
  sex: string;
  isShowingSheet: boolean;
  birthDate: string;
  weight: string;
  height: string;
}

export enum UserParametersSteps {
  DESCRIPTION,
  GENDER,
  BIRTHDATE,
  WEIGHT,
  HEIGHT,
}

const initialState: IUserParametersState = {
  isShowingSheet: true,
  step: UserParametersSteps.DESCRIPTION,
  descriptionInfo: '',
  sex: '',
  birthDate: '',
  weight: '',
  height: '',
};

const userParametersSlice = createSlice({
  name: 'userParameters',
  initialState,
  reducers: {
    setIsShowingSheet: (state, action) => {
      state.isShowingSheet = action.payload;
    },
    toggleSheet: state => {
      state.isShowingSheet = !state.isShowingSheet;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setSex: (state, action) => {
      state.sex = action.payload;
    },
    setDescriptionInfo: (state, action) => {
      state.descriptionInfo = action.payload;
    },
    setBirthDate: (state, action) => {
      state.birthDate = action.payload;
    },
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
    setHeight: (state, action) => {
      state.height = action.payload;
    },
  },
});

export const {
  setIsShowingSheet,
  setStep,
  setDescriptionInfo,
  setSex,
  toggleSheet,
  setBirthDate,
  setWeight,
  setHeight,
} = userParametersSlice.actions;

export default userParametersSlice.reducer;
