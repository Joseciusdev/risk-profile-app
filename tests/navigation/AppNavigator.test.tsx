import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../../src/navigation/AppNavigator';

describe('AppNavigator', () => {
  it('should render the Question screen as the initial screen', () => {
    const { getByText } = render(
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

    expect(getByText('How would you describe your investment knowledge?')).toBeTruthy();
  });
});
