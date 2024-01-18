import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/Home';
import {ForecastScreen} from '../screens/Forecast';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Forecast" component={ForecastScreen} />
    </Stack.Navigator>
  );
};

export {RootNavigator};
