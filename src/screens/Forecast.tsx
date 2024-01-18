import React from 'react';
import {Text, View} from 'react-native';

const ForecastScreen = ({route}) => {
  return (
    <View>
      <Text>{route.params.location.url}</Text>
    </View>
  );
};

export {ForecastScreen};
