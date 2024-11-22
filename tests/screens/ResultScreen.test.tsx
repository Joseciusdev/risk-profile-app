import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { useSelector } from 'react-redux';
import api from '../../src/services/api';
import ResultScreen from '../../src/screens/ResultScreen';

jest.mock('../services/api');
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('ResultScreen', () => {
  it('should display risk profile after API call', async () => {
    const mockRiskProfile = 'Moderate Risk';
    const mockAnswers = { 1: 5, 2: 10 };
    (useSelector as jest.Mock).mockReturnValue({ answers: mockAnswers });
    (api.post as jest.Mock).mockResolvedValueOnce({ data: { riskProfile: mockRiskProfile } });

    const { getByText } = render(<ResultScreen />);

    // Wait for the API response and check the rendered risk profile
    await waitFor(() => expect(getByText('Your Risk Profile')).toBeTruthy());
    expect(getByText(mockRiskProfile)).toBeTruthy();
  });

  it('should show loading indicator while fetching data', () => {
    const mockAnswers = { 1: 5, 2: 10 };
    (useSelector as jest.Mock).mockReturnValue({ answers: mockAnswers });

    const { getByTestId } = render(<ResultScreen />);
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });
});
