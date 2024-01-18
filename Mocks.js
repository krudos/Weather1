const MockDataSearchLocation = [
  {
    id: 908268,
    name: 'Guatemala City',
    region: 'Guatemala',
    country: 'Guatemala',
    lat: 14.62,
    lon: -90.53,
    url: 'guatemala-city-guatemala-guatemala',
  },
];

const MockDataGetForecast = {
  location: {
    name: 'Guatemala City',
    region: 'Guatemala',
    country: 'Guatemala',
    lat: 14.62,
    lon: -90.53,
    tz_id: 'America/Guatemala',
    localtime_epoch: 1705579887,
    localtime: '2024-01-18 6:11',
  },
  current: {
    last_updated_epoch: 1705579200,
    last_updated: '2024-01-18 06:00',
    temp_c: 17,
    temp_f: 62.6,
    is_day: 0,
    condition: {
      text: 'Partly cloudy',
      icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
      code: 1003,
    },
    wind_mph: 16.1,
    wind_kph: 25.9,
    wind_degree: 30,
    wind_dir: 'NNE',
    pressure_mb: 1022,
    pressure_in: 30.18,
    precip_mm: 0,
    precip_in: 0,
    humidity: 94,
    cloud: 75,
    feelslike_c: 17,
    feelslike_f: 62.6,
    vis_km: 10,
    vis_miles: 6,
    uv: 1,
    gust_mph: 20.6,
    gust_kph: 33.1,
  },
  forecast: {
    forecastday: [
      {
        date: '2024-01-18',
        date_epoch: 1705536000,
        day: {
          maxtemp_c: 27.2,
          maxtemp_f: 81,
          mintemp_c: 13.7,
          mintemp_f: 56.7,
          avgtemp_c: 18.5,
          avgtemp_f: 65.3,
          maxwind_mph: 5.4,
          maxwind_kph: 8.6,
          totalprecip_mm: 0,
          totalprecip_in: 0,
          totalsnow_cm: 0,
          avgvis_km: 8.3,
          avgvis_miles: 5,
          avghumidity: 70,
          daily_will_it_rain: 0,
          daily_chance_of_rain: 0,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: 'Sunny',
            icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
            code: 1000,
          },
          uv: 11,
        },
        astro: {
          sunrise: '06:31 AM',
          sunset: '05:54 PM',
          moonrise: '12:08 PM',
          moonset: '12:11 AM',
          moon_phase: 'First Quarter',
          moon_illumination: 48,
          is_moon_up: 1,
          is_sun_up: 0,
        },
        hour: [
          {
            time_epoch: 1705557600,
            time: '2024-01-18 00:00',
            temp_c: 13.8,
            temp_f: 56.8,
            is_day: 0,
            condition: {
              text: 'Mist',
              icon: '//cdn.weatherapi.com/weather/64x64/night/143.png',
              code: 1030,
            },
            wind_mph: 4.3,
            wind_kph: 6.8,
            wind_degree: 342,
            wind_dir: 'NNW',
            pressure_mb: 1020,
            pressure_in: 30.11,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 97,
            cloud: 64,
            feelslike_c: 13.6,
            feelslike_f: 56.5,
            windchill_c: 13.6,
            windchill_f: 56.5,
            heatindex_c: 13.8,
            heatindex_f: 56.8,
            dewpoint_c: 13.1,
            dewpoint_f: 55.5,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 2,
            vis_miles: 1,
            gust_mph: 7.9,
            gust_kph: 12.7,
            uv: 1,
            short_rad: 0,
            diff_rad: 0,
          },
          {
            time_epoch: 1705561200,
            time: '2024-01-18 01:00',
            temp_c: 13.5,
            temp_f: 56.2,
            is_day: 0,
            condition: {
              text: 'Mist',
              icon: '//cdn.weatherapi.com/weather/64x64/night/143.png',
              code: 1030,
            },
            wind_mph: 4,
            wind_kph: 6.5,
            wind_degree: 352,
            wind_dir: 'N',
            pressure_mb: 1019,
            pressure_in: 30.09,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 96,
            cloud: 60,
            feelslike_c: 13.3,
            feelslike_f: 55.9,
            windchill_c: 13.3,
            windchill_f: 55.9,
            heatindex_c: 13.5,
            heatindex_f: 56.2,
            dewpoint_c: 12.8,
            dewpoint_f: 55.1,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 2,
            vis_miles: 1,
            gust_mph: 7.5,
            gust_kph: 12.1,
            uv: 1,
            short_rad: 0,
            diff_rad: 0,
          },
          {
            time_epoch: 1705564800,
            time: '2024-01-18 02:00',
            temp_c: 13.2,
            temp_f: 55.8,
            is_day: 0,
            condition: {
              text: 'Mist',
              icon: '//cdn.weatherapi.com/weather/64x64/night/143.png',
              code: 1030,
            },
            wind_mph: 4.3,
            wind_kph: 6.8,
            wind_degree: 345,
            wind_dir: 'NNW',
            pressure_mb: 1018,
            pressure_in: 30.08,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 96,
            cloud: 62,
            feelslike_c: 12.9,
            feelslike_f: 55.3,
            windchill_c: 12.9,
            windchill_f: 55.3,
            heatindex_c: 13.2,
            heatindex_f: 55.8,
            dewpoint_c: 12.6,
            dewpoint_f: 54.7,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 2,
            vis_miles: 1,
            gust_mph: 8,
            gust_kph: 12.8,
            uv: 1,
            short_rad: 0,
            diff_rad: 0,
          },
          {
            time_epoch: 1705568400,
            time: '2024-01-18 03:00',
            temp_c: 13,
            temp_f: 55.5,
            is_day: 0,
            condition: {
              text: 'Mist',
              icon: '//cdn.weatherapi.com/weather/64x64/night/143.png',
              code: 1030,
            },
            wind_mph: 4.5,
            wind_kph: 7.2,
            wind_degree: 348,
            wind_dir: 'NNW',
            pressure_mb: 1018,
            pressure_in: 30.06,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 96,
            cloud: 63,
            feelslike_c: 12.7,
            feelslike_f: 54.9,
            windchill_c: 12.7,
            windchill_f: 54.9,
            heatindex_c: 13,
            heatindex_f: 55.5,
            dewpoint_c: 12.4,
            dewpoint_f: 54.3,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 2,
            vis_miles: 1,
            gust_mph: 8.4,
            gust_kph: 13.5,
            uv: 1,
            short_rad: 0,
            diff_rad: 0,
          },
          {
            time_epoch: 1705572000,
            time: '2024-01-18 04:00',
            temp_c: 12.9,
            temp_f: 55.2,
            is_day: 0,
            condition: {
              text: 'Mist',
              icon: '//cdn.weatherapi.com/weather/64x64/night/143.png',
              code: 1030,
            },
            wind_mph: 4.5,
            wind_kph: 7.2,
            wind_degree: 347,
            wind_dir: 'NNW',
            pressure_mb: 1018,
            pressure_in: 30.07,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 96,
            cloud: 62,
            feelslike_c: 12.6,
            feelslike_f: 54.7,
            windchill_c: 12.6,
            windchill_f: 54.7,
            heatindex_c: 12.9,
            heatindex_f: 55.2,
            dewpoint_c: 12.3,
            dewpoint_f: 54.1,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 2,
            vis_miles: 1,
            gust_mph: 8.4,
            gust_kph: 13.5,
            uv: 1,
            short_rad: 0,
            diff_rad: 0,
          },
          {
            time_epoch: 1705575600,
            time: '2024-01-18 05:00',
            temp_c: 12.8,
            temp_f: 55,
            is_day: 0,
            condition: {
              text: 'Mist',
              icon: '//cdn.weatherapi.com/weather/64x64/night/143.png',
              code: 1030,
            },
            wind_mph: 4.3,
            wind_kph: 6.8,
            wind_degree: 344,
            wind_dir: 'NNW',
            pressure_mb: 1018,
            pressure_in: 30.08,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 96,
            cloud: 58,
            feelslike_c: 12.5,
            feelslike_f: 54.6,
            windchill_c: 12.5,
            windchill_f: 54.6,
            heatindex_c: 12.8,
            heatindex_f: 55,
            dewpoint_c: 12.1,
            dewpoint_f: 53.8,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 2,
            vis_miles: 1,
            gust_mph: 7.9,
            gust_kph: 12.7,
            uv: 1,
            short_rad: 0,
            diff_rad: 0,
          },
          {
            time_epoch: 1705579200,
            time: '2024-01-18 06:00',
            temp_c: 17,
            temp_f: 62.6,
            is_day: 0,
            condition: {
              text: 'Partly cloudy',
              icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
              code: 1003,
            },
            wind_mph: 16.1,
            wind_kph: 25.9,
            wind_degree: 30,
            wind_dir: 'NNE',
            pressure_mb: 1022,
            pressure_in: 30.18,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 94,
            cloud: 75,
            feelslike_c: 12.7,
            feelslike_f: 54.9,
            windchill_c: 12.7,
            windchill_f: 54.9,
            heatindex_c: 12.9,
            heatindex_f: 55.3,
            dewpoint_c: 12,
            dewpoint_f: 53.6,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 20.6,
            gust_kph: 33.1,
            uv: 1,
            short_rad: 0,
            diff_rad: 0,
          },
          {
            time_epoch: 1705582800,
            time: '2024-01-18 07:00',
            temp_c: 14,
            temp_f: 57.2,
            is_day: 1,
            condition: {
              text: 'Partly cloudy',
              icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
              code: 1003,
            },
            wind_mph: 4,
            wind_kph: 6.5,
            wind_degree: 346,
            wind_dir: 'NNW',
            pressure_mb: 1019,
            pressure_in: 30.1,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 93,
            cloud: 42,
            feelslike_c: 13.9,
            feelslike_f: 57,
            windchill_c: 13.9,
            windchill_f: 57,
            heatindex_c: 14,
            heatindex_f: 57.2,
            dewpoint_c: 12,
            dewpoint_f: 53.6,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 7.2,
            gust_kph: 11.7,
            uv: 4,
            short_rad: 80.34,
            diff_rad: 30.9,
          },
          {
            time_epoch: 1705586400,
            time: '2024-01-18 08:00',
            temp_c: 16.3,
            temp_f: 61.3,
            is_day: 1,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
              code: 1000,
            },
            wind_mph: 4.5,
            wind_kph: 7.2,
            wind_degree: 357,
            wind_dir: 'N',
            pressure_mb: 1019,
            pressure_in: 30.1,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 81,
            cloud: 12,
            feelslike_c: 16.2,
            feelslike_f: 61.2,
            windchill_c: 16.2,
            windchill_f: 61.2,
            heatindex_c: 16.3,
            heatindex_f: 61.3,
            dewpoint_c: 11.9,
            dewpoint_f: 53.4,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 6.4,
            gust_kph: 10.3,
            uv: 5,
            short_rad: 120.51,
            diff_rad: 46.36,
          },
          {
            time_epoch: 1705590000,
            time: '2024-01-18 09:00',
            temp_c: 18.9,
            temp_f: 66,
            is_day: 1,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
              code: 1000,
            },
            wind_mph: 5.1,
            wind_kph: 8.3,
            wind_degree: 8,
            wind_dir: 'N',
            pressure_mb: 1019,
            pressure_in: 30.09,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 67,
            cloud: 6,
            feelslike_c: 18.9,
            feelslike_f: 66,
            windchill_c: 18.9,
            windchill_f: 66,
            heatindex_c: 20.3,
            heatindex_f: 68.6,
            dewpoint_c: 12.2,
            dewpoint_f: 54,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 5.9,
            gust_kph: 9.5,
            uv: 5,
            short_rad: 160.68,
            diff_rad: 61.81,
          },
          {
            time_epoch: 1705593600,
            time: '2024-01-18 10:00',
            temp_c: 21.4,
            temp_f: 70.5,
            is_day: 1,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
              code: 1000,
            },
            wind_mph: 5.1,
            wind_kph: 8.3,
            wind_degree: 21,
            wind_dir: 'NNE',
            pressure_mb: 1018,
            pressure_in: 30.06,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 53,
            cloud: 6,
            feelslike_c: 21.4,
            feelslike_f: 70.5,
            windchill_c: 21.4,
            windchill_f: 70.5,
            heatindex_c: 22.6,
            heatindex_f: 72.7,
            dewpoint_c: 11.6,
            dewpoint_f: 52.9,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 5.9,
            gust_kph: 9.5,
            uv: 6,
            short_rad: 313.99,
            diff_rad: 74.73,
          },
          {
            time_epoch: 1705597200,
            time: '2024-01-18 11:00',
            temp_c: 23.7,
            temp_f: 74.6,
            is_day: 1,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
              code: 1000,
            },
            wind_mph: 4.5,
            wind_kph: 7.2,
            wind_degree: 33,
            wind_dir: 'NNE',
            pressure_mb: 1017,
            pressure_in: 30.03,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 43,
            cloud: 5,
            feelslike_c: 24.2,
            feelslike_f: 75.5,
            windchill_c: 23.7,
            windchill_f: 74.6,
            heatindex_c: 24.2,
            heatindex_f: 75.5,
            dewpoint_c: 10.6,
            dewpoint_f: 51,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 5.1,
            gust_kph: 8.3,
            uv: 6,
            short_rad: 390.65,
            diff_rad: 81.19,
          },
          {
            time_epoch: 1705600800,
            time: '2024-01-18 12:00',
            temp_c: 25.3,
            temp_f: 77.6,
            is_day: 1,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
              code: 1000,
            },
            wind_mph: 3.6,
            wind_kph: 5.8,
            wind_degree: 50,
            wind_dir: 'NE',
            pressure_mb: 1016,
            pressure_in: 29.99,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 35,
            cloud: 2,
            feelslike_c: 25.1,
            feelslike_f: 77.3,
            windchill_c: 25.3,
            windchill_f: 77.6,
            heatindex_c: 25.1,
            heatindex_f: 77.3,
            dewpoint_c: 9.2,
            dewpoint_f: 48.6,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 4.1,
            gust_kph: 6.6,
            uv: 7,
            short_rad: 467.3,
            diff_rad: 87.65,
          },
          {
            time_epoch: 1705604400,
            time: '2024-01-18 13:00',
            temp_c: 26.3,
            temp_f: 79.4,
            is_day: 1,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
              code: 1000,
            },
            wind_mph: 2.7,
            wind_kph: 4.3,
            wind_degree: 57,
            wind_dir: 'ENE',
            pressure_mb: 1014,
            pressure_in: 29.94,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 31,
            cloud: 0,
            feelslike_c: 25.7,
            feelslike_f: 78.3,
            windchill_c: 26.3,
            windchill_f: 79.4,
            heatindex_c: 25.7,
            heatindex_f: 78.3,
            dewpoint_c: 8.2,
            dewpoint_f: 46.8,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 3.1,
            gust_kph: 5,
            uv: 7,
            short_rad: 630.55,
            diff_rad: 120.31,
          },
          {
            time_epoch: 1705608000,
            time: '2024-01-18 14:00',
            temp_c: 26.5,
            temp_f: 79.6,
            is_day: 1,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
              code: 1000,
            },
            wind_mph: 1.8,
            wind_kph: 2.9,
            wind_degree: 69,
            wind_dir: 'ENE',
            pressure_mb: 1012,
            pressure_in: 29.88,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 29,
            cloud: 2,
            feelslike_c: 25.8,
            feelslike_f: 78.5,
            windchill_c: 26.5,
            windchill_f: 79.6,
            heatindex_c: 25.8,
            heatindex_f: 78.5,
            dewpoint_c: 7.9,
            dewpoint_f: 46.2,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 2.1,
            gust_kph: 3.3,
            uv: 7,
            short_rad: 712.18,
            diff_rad: 136.64,
          },
          {
            time_epoch: 1705611600,
            time: '2024-01-18 15:00',
            temp_c: 25.9,
            temp_f: 78.6,
            is_day: 1,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
              code: 1000,
            },
            wind_mph: 1.3,
            wind_kph: 2.2,
            wind_degree: 92,
            wind_dir: 'E',
            pressure_mb: 1011,
            pressure_in: 29.86,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 31,
            cloud: 3,
            feelslike_c: 25.6,
            feelslike_f: 78.1,
            windchill_c: 25.9,
            windchill_f: 78.6,
            heatindex_c: 25.6,
            heatindex_f: 78.1,
            dewpoint_c: 8.3,
            dewpoint_f: 46.9,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 1.5,
            gust_kph: 2.5,
            uv: 7,
            short_rad: 793.8,
            diff_rad: 152.97,
          },
          {
            time_epoch: 1705615200,
            time: '2024-01-18 16:00',
            temp_c: 24.5,
            temp_f: 76,
            is_day: 1,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
              code: 1000,
            },
            wind_mph: 1.1,
            wind_kph: 1.8,
            wind_degree: 108,
            wind_dir: 'ESE',
            pressure_mb: 1012,
            pressure_in: 29.87,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 36,
            cloud: 5,
            feelslike_c: 25.1,
            feelslike_f: 77.3,
            windchill_c: 24.5,
            windchill_f: 76,
            heatindex_c: 25.1,
            heatindex_f: 77.3,
            dewpoint_c: 9.4,
            dewpoint_f: 49,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 1.3,
            gust_kph: 2.1,
            uv: 7,
            short_rad: 665.69,
            diff_rad: 127.73,
          },
          {
            time_epoch: 1705618800,
            time: '2024-01-18 17:00',
            temp_c: 21.4,
            temp_f: 70.5,
            is_day: 1,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
              code: 1000,
            },
            wind_mph: 1.1,
            wind_kph: 1.8,
            wind_degree: 141,
            wind_dir: 'SE',
            pressure_mb: 1013,
            pressure_in: 29.9,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 48,
            cloud: 7,
            feelslike_c: 21.4,
            feelslike_f: 70.5,
            windchill_c: 21.4,
            windchill_f: 70.5,
            heatindex_c: 21.7,
            heatindex_f: 71.1,
            dewpoint_c: 11.5,
            dewpoint_f: 52.7,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 1.7,
            gust_kph: 2.7,
            uv: 6,
            short_rad: 601.64,
            diff_rad: 115.11,
          },
          {
            time_epoch: 1705622400,
            time: '2024-01-18 18:00',
            temp_c: 19.1,
            temp_f: 66.4,
            is_day: 0,
            condition: {
              text: 'Clear',
              icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
              code: 1000,
            },
            wind_mph: 2,
            wind_kph: 3.2,
            wind_degree: 193,
            wind_dir: 'SSW',
            pressure_mb: 1014,
            pressure_in: 29.94,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 67,
            cloud: 7,
            feelslike_c: 19.1,
            feelslike_f: 66.4,
            windchill_c: 19.1,
            windchill_f: 66.4,
            heatindex_c: 19.3,
            heatindex_f: 66.7,
            dewpoint_c: 12,
            dewpoint_f: 53.6,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 4.2,
            gust_kph: 6.8,
            uv: 1,
            short_rad: 537.58,
            diff_rad: 102.5,
          },
          {
            time_epoch: 1705626000,
            time: '2024-01-18 19:00',
            temp_c: 17.7,
            temp_f: 63.8,
            is_day: 0,
            condition: {
              text: 'Clear',
              icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
              code: 1000,
            },
            wind_mph: 1.8,
            wind_kph: 2.9,
            wind_degree: 240,
            wind_dir: 'WSW',
            pressure_mb: 1015,
            pressure_in: 29.98,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 74,
            cloud: 5,
            feelslike_c: 17.7,
            feelslike_f: 63.8,
            windchill_c: 17.7,
            windchill_f: 63.8,
            heatindex_c: 17.8,
            heatindex_f: 64,
            dewpoint_c: 12.1,
            dewpoint_f: 53.9,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 3.8,
            gust_kph: 6,
            uv: 1,
            short_rad: 268.79,
            diff_rad: 51.25,
          },
          {
            time_epoch: 1705629600,
            time: '2024-01-18 20:00',
            temp_c: 16.8,
            temp_f: 62.2,
            is_day: 0,
            condition: {
              text: 'Clear',
              icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
              code: 1000,
            },
            wind_mph: 1.6,
            wind_kph: 2.5,
            wind_degree: 310,
            wind_dir: 'NW',
            pressure_mb: 1016,
            pressure_in: 30.01,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 76,
            cloud: 5,
            feelslike_c: 16.8,
            feelslike_f: 62.2,
            windchill_c: 16.8,
            windchill_f: 62.2,
            heatindex_c: 16.8,
            heatindex_f: 62.3,
            dewpoint_c: 12,
            dewpoint_f: 53.6,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 3.3,
            gust_kph: 5.3,
            uv: 1,
            short_rad: 134.4,
            diff_rad: 25.62,
          },
          {
            time_epoch: 1705633200,
            time: '2024-01-18 21:00',
            temp_c: 16,
            temp_f: 60.8,
            is_day: 0,
            condition: {
              text: 'Clear',
              icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
              code: 1000,
            },
            wind_mph: 2.9,
            wind_kph: 4.7,
            wind_degree: 341,
            wind_dir: 'NNW',
            pressure_mb: 1017,
            pressure_in: 30.03,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 76,
            cloud: 7,
            feelslike_c: 16,
            feelslike_f: 60.8,
            windchill_c: 16,
            windchill_f: 60.8,
            heatindex_c: 16,
            heatindex_f: 60.8,
            dewpoint_c: 11.6,
            dewpoint_f: 52.8,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 6.1,
            gust_kph: 9.8,
            uv: 1,
            short_rad: 0,
            diff_rad: 0,
          },
          {
            time_epoch: 1705636800,
            time: '2024-01-18 22:00',
            temp_c: 15.3,
            temp_f: 59.5,
            is_day: 0,
            condition: {
              text: 'Clear',
              icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
              code: 1000,
            },
            wind_mph: 3.1,
            wind_kph: 5,
            wind_degree: 338,
            wind_dir: 'NNW',
            pressure_mb: 1018,
            pressure_in: 30.05,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 76,
            cloud: 11,
            feelslike_c: 15.4,
            feelslike_f: 59.7,
            windchill_c: 15.4,
            windchill_f: 59.7,
            heatindex_c: 15.3,
            heatindex_f: 59.5,
            dewpoint_c: 11.1,
            dewpoint_f: 52,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 6.6,
            gust_kph: 10.6,
            uv: 1,
            short_rad: 0,
            diff_rad: 0,
          },
          {
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
          },
        ],
      },
    ],
  },
};

export {MockDataSearchLocation, MockDataGetForecast};