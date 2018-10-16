import axios from 'axios'

import { OPEN_WEATHER_MAP_APPID as appid } from './config'

const service = axios.create({
  baseURL: 'https://api.openweathermap.org',
  timeout: 30000,
  headers: {
    'content-type': 'application/json;charset=UTF-8'
  },
  params: {
    appid
  }
})

service.interceptors.response.use(
  ({ data }) => Promise.resolve(data),
  error => Promise.reject(error)
)

const searchCityWeather = city => service({
  url: '/data/2.5/weather',
  params: {
    q: city
  }
})

export {
  searchCityWeather
}
