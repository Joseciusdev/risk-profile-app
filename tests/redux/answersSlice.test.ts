import answersReducer, { setAnswer, calculateScore } from '../../src/redux/answersSlice';

describe('answersSlice', () => {
  it('should handle setAnswer', () => {
    const initialState = { answers: {}, totalScore: 0 };
    const action = setAnswer({ questionId: 1, score: 5 });
    const state = answersReducer(initialState, action);

    expect(state.answers).toEqual({ 1: 5 });
  });

  it('should calculate totalScore correctly', () => {
    const initialState = { answers: { 1: 5, 2: 10 }, totalScore: 0 };
    const state = answersReducer(initialState, calculateScore());

    expect(state.totalScore).toBe(15);
  });
});
