import {useQuery} from 'react-query';

import {searchLocation, getForecast} from './weatherAPI';
import {Location} from '../types/Location';

const useSearchLocation = (city: string) => {
  const {isLoading, data} = useQuery(
    ['searchLocation', city],
    () => searchLocation(city).then(res => res.data),
    {
      enabled: city.length > 2,
    },
  );

  const locations = data as Location[];

  return {isLoading, data: locations};
};

const useGetForecast = (locationURL: string) => {
  const getForecastQuery = useQuery(
    ['getForecast', locationURL],
    () => getForecast(locationURL),
    {
      enabled: false,
    },
  );

  return getForecastQuery;
};

export {useSearchLocation, useGetForecast};
