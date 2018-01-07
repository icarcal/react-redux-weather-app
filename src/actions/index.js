import axios from 'axios';

const API_KEY = process.env.WEATHER_API_KEY;
const API_URL = process.env.WEATHER_API_URL;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${API_URL}/forecast?APPID=${API_KEY}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
