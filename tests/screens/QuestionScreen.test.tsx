import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import QuestionScreen from '../../src/screens/QuestionScreen';
import api from '../../src/services/api';

jest.mock('../services/api');

const mockStore = configureStore([]);
const mockNavigation = { push: jest.fn(), navigate: jest.fn() };

describe('QuestionScreen', () => {
  it('should render questions and handle answers', async () => {
    const questionsMock = [
      {
        id: 1,
        question: 'What is your risk tolerance?',
        options: [
          { id: '1a', text: 'Low', score: 1 },
          { id: '1b', text: 'High', score: 5 },
        ],
      },
    ];

    (api.get as jest.Mock).mockResolvedValueOnce({ data: questionsMock });

    const store = mockStore({ answers: { answers: {}, totalScore: 0 } });
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <QuestionScreen navigation={mockNavigation} route={{ params: { questionIndex: 0 } }} />
      </Provider>
    );

    // Wait for questions to load
    await waitFor(() => expect(getByText('What is your risk tolerance?')).toBeTruthy());

    // Answer the question
    fireEvent.press(getByText('Low'));

    // Verify navigation to next screen
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Result');
  });
});
