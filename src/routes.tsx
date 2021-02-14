import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import HomePage from './pages/HomeScreen/index';
import PresentationScreen from './pages/PresentationScreen';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#f2f3f5' },
        }}
      >
        <Screen name="Presentation" component={PresentationScreen} />
        <Screen name="Home" component={HomePage} />
      </Navigator>
    </NavigationContainer>
  );
}
