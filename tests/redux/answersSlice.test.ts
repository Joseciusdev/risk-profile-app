import answersReducer, { setAnswer, calculateScore } from '../../src/redux/answersSlice';

describe('answersSlice', () => {
  const initialState = {
    answers: {},
    totalScore: 0,
  };

  it('should handle initial state', () => {
    expect(answersReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle setAnswer', () => {
    const action = setAnswer({ questionId: 1, score: 3 });
    const result = answersReducer(initialState, action);

    expect(result.answers).toEqual({ 1: 3 });
  });

  it('should calculate totalScore correctly', () => {
    const state = {
      answers: { 1: 3, 2: 5 },
      totalScore: 0,
    };
    const result = answersReducer(state, calculateScore());

    expect(result.totalScore).toBe(8);
  });
});
