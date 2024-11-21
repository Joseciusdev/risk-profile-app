import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ResultScreen from '../../src/screens/ResultScreen';

const mockStore = configureStore([]);

describe('ResultScreen', () => {
  it('should display total score and risk profile category', () => {
    const store = mockStore({
      answers: {
        totalScore: 10,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <ResultScreen />
      </Provider>
    );

    expect(getByText('Your Risk Profile')).toBeTruthy();
    expect(getByText('Score: 10')).toBeTruthy();
    expect(getByText('Medium Risk')).toBeTruthy();
  });
});
