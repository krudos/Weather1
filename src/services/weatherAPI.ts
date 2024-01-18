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

const getForecast = (locationURL: string) =>
  weatherAPI.get(`/forecast.json?q=${locationURL}&days=1`);

export {searchLocation, getForecast};
