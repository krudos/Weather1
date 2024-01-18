import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useGetForecast} from '../services/useWeatherAPI';
import {ActivityIndicator, Divider} from 'react-native-paper';
import {ForecastWithImage} from '../components/ForecastWithImage';
import {BaseScreen} from '../components/BaseScreen';
import {RootStackParamList} from '../navigation/Root';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HourForecast} from '../components/HourForecast';

type Props = NativeStackScreenProps<RootStackParamList, 'Forecast'>;

const ForecastScreen = ({route}: Props) => {
  const {data, isLoading} = useGetForecast(route.params.location.url);

  return (
    <BaseScreen edges={['left', 'right']}>
      {isLoading && <ActivityIndicator />}
      {!isLoading && (
        <>
          <View style={styles.rowCenter}>
            <View style={styles.fullView}>
              <Text>{data.forecastResult.location.name},</Text>
              <Text>{data.forecastResult.location.country}</Text>
            </View>
            <ForecastWithImage
              icon={data.forecastResult.current.condition.icon}
              condition={data.forecastResult.current.condition.text}
              temp_c={data.forecastResult.current.temp_c}
            />
          </View>

          <Text>Next 5 hours forecast</Text>
          <FlatList
            scrollEnabled={false}
            ListEmptyComponent={<Text>No results</Text>}
            ItemSeparatorComponent={Divider}
            data={data.nextFiveHours}
            renderItem={({item}) => (
              <HourForecast item={item} key={item.time} />
            )}
          />
        </>
      )}
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  rowCenter: {flexDirection: 'row', alignItems: 'center'},
  fullView: {flex: 1},
});

export {ForecastScreen};
