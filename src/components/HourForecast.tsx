import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ForecastWithImage} from './ForecastWithImage';
import {Hour} from '../types/Forecast';

const HourForecast = ({item}: {item: Hour}) => {
  return (
    <View style={styles.contentView}>
      <Text style={styles.fullView}>{item.time.substring(11)}</Text>
      <ForecastWithImage
        icon={item.condition.icon}
        condition={item.condition.text}
        temp_c={item.temp_c}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullView: {flex: 1},
});

export {HourForecast};
