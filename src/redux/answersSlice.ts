import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AnswerState {
  answers: { [key: number]: number };
  totalScore: number;
}

const initialState: AnswerState = {
  answers: {},
  totalScore: 0,
};

const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    setAnswer: (
      state,
      action: PayloadAction<{ questionId: number; score: number }>
    ) => {
      state.answers[action.payload.questionId] = action.payload.score;
    },
    calculateScore: (state) => {
      state.totalScore = Object.values(state.answers).reduce((sum, score) => sum + score, 0);
    },
  },
});

export const { setAnswer, calculateScore } = answersSlice.actions;
export default answersSlice.reducer;
