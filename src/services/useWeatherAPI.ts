import {useQuery} from 'react-query';

import {searchLocation, getForecast} from './weatherAPI';
import {Location} from '../types/Location';
import {ForecastResult} from '../types/Forecast';

const useSearchLocation = (city: string) => {
  const {isLoading, data, isError, refetch} = useQuery(
    ['searchLocation', city],
    () => searchLocation(city).then(res => res.data),
    {
      enabled: city.length > 2,
    },
  );

  const locations = data as Location[];

  return {isLoading, data: locations, isError, refetch};
};

const useGetForecast = (
  locationURL: string,
  currentHour = new Date().getHours().toString(),
) => {
  const {isLoading, data, isError, refetch} = useQuery(
    ['getForecast', locationURL],
    () => getForecast(locationURL).then(res => res.data),
    {
      enabled: !!locationURL && locationURL.length > 0,
    },
  );

  const forecastResult = data as ForecastResult;

  const nextFiveHours =
    (forecastResult &&
      forecastResult.forecast.forecastday
        .map(forecastday => forecastday.hour)
        .flat()
        .filter(item => item.time.substring(11, 13) >= currentHour)
        .slice(0, 5)) ||
    [];

  return {isLoading, data: {forecastResult, nextFiveHours}, isError, refetch};
};

export {useSearchLocation, useGetForecast};
