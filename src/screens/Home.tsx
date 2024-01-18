import React from 'react';
import {FlatList, Text, View} from 'react-native';

import {ActivityIndicator, Divider, Searchbar} from 'react-native-paper';
import {useSearchLocation} from '../services/useWeatherAPI';
import {useDebounce} from '@uidotdev/usehooks';
import {LocationItem} from '../components/LocationItem';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('guatemala');

  const debouncedSearch = useDebounce(searchQuery, 500);

  const {data, isLoading} = useSearchLocation(debouncedSearch);

  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <Searchbar
        placeholder="Please enter the name of a city"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />

      {isLoading && <ActivityIndicator />}

      <FlatList
        ListEmptyComponent={<Text>No results</Text>}
        data={data}
        ItemSeparatorComponent={Divider}
        renderItem={({item}) => (
          <LocationItem
            key={item.id}
            location={item}
            onPress={() => navigation.navigate('Forecast', {location: item})}
          />
        )}
      />
    </View>
  );
};

export {HomeScreen};
