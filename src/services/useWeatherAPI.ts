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

const useGetForecast = (locationURL: string, currentDay = new Date()) => {
  const currentHour = `${currentDay.getDate()} ${currentDay.getHours()}`;

  const {isLoading, data, isError, refetch} = useQuery(
    ['getForecast', locationURL, currentHour],
    () => getForecast(locationURL).then(res => res.data),
    {
      enabled: !!locationURL && locationURL.length > 0,
    },
  );

  const forecastResult = data as ForecastResult;

  const nextFiveHours = getNextFiveHours(currentHour, forecastResult);

  return {isLoading, data: {forecastResult, nextFiveHours}, isError, refetch};
};

const getNextFiveHours = (
  currentHour: string,
  forecastResult: ForecastResult,
) => {
  if (!forecastResult) {
    return [];
  }

  return forecastResult.forecast.forecastday
    .map(forecastday => forecastday.hour)
    .flat()
    .filter(item => item.time.substring(8, 13) >= currentHour) // '2024-01-18 21:00' -> '18 21'
    .slice(0, 5);
};

export {useSearchLocation, useGetForecast};
