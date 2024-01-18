import React from 'react';

import {TouchableOpacity, View} from 'react-native';
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
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: 10,
          marginBottom: 10,
        }}>
        <View style={{flex: 1}}>
          <Text>Name: {location.name}</Text>
          <Text>Region: {location.region || 'unknow'}</Text>
          <Text>Country: {location.country}</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          {country && <CountryFlag isoCode={country} size={25} />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export {LocationItem};