import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ForecastScreen} from '../screens/Forecast';
import {HomeScreen} from '../screens/Home';
import {Location} from '../types/Location';

export type RootStackParamList = {
  Home: undefined;
  Forecast: {location: Location};
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Forecast"
        component={ForecastScreen}
        options={({route}) => ({title: route.params.location.name})}
      />
    </RootStack.Navigator>
  );
};

export {RootNavigator};
