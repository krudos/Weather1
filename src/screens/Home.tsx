import React, {useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

import {ActivityIndicator, Divider, Searchbar} from 'react-native-paper';
import {useSearchLocation} from '../services/useWeatherAPI';
import {LocationItem} from '../components/LocationItem';
import {BaseScreen} from '../components/BaseScreen';
import {RootStackParamList} from '../navigation/Root';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useDebounce} from 'usehooks-ts';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 500);
  const {data, isLoading} = useSearchLocation(debouncedSearch);

  return (
    <BaseScreen>
      <Searchbar
        placeholder="Please enter the name of a city"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      {isLoading && <ActivityIndicator />}
      <FlatList
        scrollEnabled={false}
        contentContainerStyle={styles.contentView}
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
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  contentView: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
});

export {HomeScreen};
