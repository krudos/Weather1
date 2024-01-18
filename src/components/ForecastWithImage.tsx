import React from 'react';
import {Text, View} from 'react-native';
import {Image} from 'react-native';
import {ForecastWithImageProps} from '../screens/Forecast';

export const ForecastWithImage = ({
  icon,
  condition,
  temp_c,
}: ForecastWithImageProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        style={{width: 64, height: 64}}
        source={{
          uri: `https:${icon}`,
        }}
      />
      <View style={{justifyContent: 'center'}}>
        <Text>{condition}</Text>
        <Text>{temp_c}°</Text>
      </View>
    </View>
  );
};
