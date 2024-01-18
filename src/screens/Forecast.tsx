import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {useGetForecast} from '../services/useWeatherAPI';
import {ActivityIndicator, Divider} from 'react-native-paper';
import {ForecastWithImage} from '../components/ForecastWithImage';
import {BaseScreen} from '../components/BaseScreen';

export interface ForecastWithImageProps {
  icon: string;
  condition: string;
  temp_c: number;
}
const ForecastScreen = ({route}) => {
  const {data, isLoading} = useGetForecast(route.params.location.url);

  return (
    <BaseScreen>
      {isLoading && <ActivityIndicator />}
      {!isLoading && (
        <>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
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
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                key={item.time}>
                <Text>{item.time.substring(11)}</Text>

                <ForecastWithImage
                  icon={item.condition.icon}
                  condition={item.condition.text}
                  temp_c={item.temp_c}
                />
              </View>
            )}
          />
        </>
      )}
    </BaseScreen>
  );
};

export {ForecastScreen};
