import React from 'react';
import {FlatList, Text} from 'react-native';

import {ActivityIndicator, Divider, Searchbar} from 'react-native-paper';
import {useSearchLocation} from '../services/useWeatherAPI';
import {useDebounce} from '@uidotdev/usehooks';
import {LocationItem} from '../components/LocationItem';
import {BaseScreen} from '../components/BaseScreen';
import {RootStackParamList} from '../navigation/Root';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
  const [searchQuery, setSearchQuery] = React.useState('guatemala');

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
        contentContainerStyle={{
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: 10,
        }}
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

export {HomeScreen};
