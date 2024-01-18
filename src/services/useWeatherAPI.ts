import {useQuery} from 'react-query';

import {searchLocation, getForecast} from './weatherAPI';

const useSearchLocation = (city: string) => {
  const searchLocationQuery = useQuery(
    ['searchLocation', city],
    () => searchLocation(city),
    {
      enabled: false,
    },
  );

  return searchLocationQuery;
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
