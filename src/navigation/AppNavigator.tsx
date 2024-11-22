import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuestionScreen from '../screens/QuestionScreen';
import ResultScreen from '../screens/ResultScreen';

export type RootStackParamList = {
  Question: { questionIndex: number };
  Result: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Question">
        <Stack.Screen
          name="Question"
          component={QuestionScreen}
          initialParams={{ questionIndex: 0 }}
        />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import QuestionScreen from '../screens/QuestionScreen';
// import ResultScreen from '../screens/ResultScreen';

// const Stack = createStackNavigator();

// const AppNavigator = () => (
//   <Stack.Navigator initialRouteName="QuestionScreen">
//     <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
//     <Stack.Screen name="ResultScreen" component={ResultScreen} />
//   </Stack.Navigator>
// );

// export default AppNavigator;

