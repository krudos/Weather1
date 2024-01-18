import React from 'react';
import {render} from '@testing-library/react-native';
import {HourForecast} from '../src/components/HourForecast';
import {Hour} from '../src/types/Forecast';

describe('HourForecast', () => {
  it('renders correctly', async () => {
    const item: Hour = {
      time_epoch: 1705640400,
      time: '2024-01-18 23:00',
      temp_c: 14.7,
      temp_f: 58.4,
      is_day: 0,
      condition: {
        text: 'Clear',
        icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
        code: 1000,
      },
      wind_mph: 3.4,
      wind_kph: 5.4,
      wind_degree: 338,
      wind_dir: 'NNW',
      pressure_mb: 1018,
      pressure_in: 30.06,
      precip_mm: 0,
      precip_in: 0,
      snow_cm: 0,
      humidity: 80,
      cloud: 15,
      feelslike_c: 14.9,
      feelslike_f: 58.8,
      windchill_c: 14.9,
      windchill_f: 58.8,
      heatindex_c: 14.7,
      heatindex_f: 58.4,
      dewpoint_c: 11.2,
      dewpoint_f: 52.2,
      will_it_rain: 0,
      chance_of_rain: 0,
      will_it_snow: 0,
      chance_of_snow: 0,
      vis_km: 10,
      vis_miles: 6,
      gust_mph: 7,
      gust_kph: 11.3,
      uv: 1,
      short_rad: 0,
      diff_rad: 0,
    };

    const tree = render(<HourForecast item={item} />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
