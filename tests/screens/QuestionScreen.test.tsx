import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import QuestionScreen from '../../src/screens/QuestionScreen';

const mockStore = configureStore([]);

describe('QuestionScreen', () => {
  const navigationMock = { push: jest.fn(), navigate: jest.fn() };

  it('should render question and options', () => {
    const store = mockStore({});
    const questions = [
      {
        id: 1,
        question: 'How would you describe your investment knowledge?',
        options: [
          { id: 'a', text: 'Novice', score: 1 },
          { id: 'b', text: 'Intermediate', score: 2 },
          { id: 'c', text: 'Advanced', score: 3 },
        ],
      },
    ];

    const { getByText } = render(
      <Provider store={store}>
        <QuestionScreen navigation={navigationMock} route={{ params: { questionIndex: 0 } }} />
      </Provider>
    );

    expect(getByText('How would you describe your investment knowledge?')).toBeTruthy();
    expect(getByText('Novice')).toBeTruthy();
    expect(getByText('Intermediate')).toBeTruthy();
    expect(getByText('Advanced')).toBeTruthy();
  });

  it('should dispatch setAnswer and navigate to the next question', () => {
    const store = mockStore({});
    const { getByText } = render(
      <Provider store={store}>
        <QuestionScreen navigation={navigationMock} route={{ params: { questionIndex: 0 } }} />
      </Provider>
    );

    fireEvent.press(getByText('Novice'));
    const actions = store.getActions();

    expect(actions[0]).toEqual({ type: 'answers/setAnswer', payload: { questionId: 1, option: { score: 1 } } });
    expect(navigationMock.push).toHaveBeenCalledWith('Question', { questionIndex: 1 });
  });
});
