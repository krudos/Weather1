import React from 'react';

import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Location} from '../types/Location';
import {Text} from 'react-native-paper';
import CountryFlag from 'react-native-country-flag';
import {countryToAlpha2} from 'country-to-iso';

interface LocationItemProps {
  location: Location;
  onPress: () => void;
}

const LocationItem = ({location, onPress}: LocationItemProps) => {
  const country = countryToAlpha2(location.country);
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchView}>
      <View style={styles.fillAllView}>
        <Text>{location.name},</Text>
        <Text>{location.country}</Text>
      </View>
      <View style={styles.flagView}>
        {country && <CountryFlag isoCode={country} size={25} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchView: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  fillAllView: {flex: 1},
  flagView: {alignItems: 'center', justifyContent: 'center'},
});

export {LocationItem};
