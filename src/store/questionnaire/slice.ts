import { createSlice } from '@reduxjs/toolkit';

export interface IQuestionnaireState {
  step: number;
  answers: Record<string, string>;
}

const initialState: IQuestionnaireState = {
  step: 0,
  answers: {},
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setAnswer: (state, action) => {
      state.answers[action.payload.questionId] = action.payload.answer;
    },
  },
});

export const { setStep, setAnswer } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
