import axios from 'axios';
import Config from 'react-native-config';

const weatherAPI = axios.create({
  baseURL: Config.API_URL,
  params: {
    key: Config.API_KEY,
  },
});

const searchLocation = (city: string) =>
  weatherAPI.get(`/search.json?q=${city}`);

const DAYS = 2; // 2 will allow to calculate next 5 hours even if we are in the last hour of the current day
const getForecast = (locationURL: string) =>
  weatherAPI.get(`/forecast.json?q=${locationURL}&days=${DAYS}`);

export {searchLocation, getForecast};
