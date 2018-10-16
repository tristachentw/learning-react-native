import React, { Component } from 'react'
import { View } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { injectIntl, intlShape } from 'react-intl'
import { compose } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { convertTimestamp } from '@root/utils/date'
import { WEATHER_ICON_PATH_PREFIX } from './config'
import ICONS from './style/icons'
import {
  actions,
  getData,
  getLoading,
  getError
} from './redux/weather'

import Text from './components/Text'
import Icon from './components/Icon'
import ListItem from './components/ListItem'
import Bg from './bg.jpg'

const DEFAULT_CITY = 'taipei'
const CONTENT_FIELD_ORDER = ['humidity', 'wind', 'pressure', 'visibility', 'sunrise', 'sunset']

const StyledBlock = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-left: 20;
  padding-right: 20;
`
const StyledContainer = styled.ImageBackground.attrs({
  source: Bg
})`
  width: 100%;
  height: 100%;
`
const StyledBody = styled.View`
  flex: 1;
`
const StyledHeading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
const StyledWeatherIcon = styled.Image`
  width: 150;
  height: 150;
  margin-left: 10;
  margin-right: 10;
`
const StyledTemperatureIcon = styled(Icon).attrs({
  size: 40
})``
const StyledContent = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`
const StyledFooter = styled(Text)`
  align-self: flex-end;
  margin-top: 20;
  margin-bottom: 10;
  margin-left: 5;
  margin-right: 5;
`

class WeatherAPP extends Component {
  constructor (props) {
    super(props)
    this.state = {
      temperatureUnit: 'c'
    }
    this.fetchWeather = this.fetchWeather.bind(this)
  }

  componentDidMount () {
    this.fetchWeather(DEFAULT_CITY)
  }

  fetchWeather (city) {
    this.props.fetchWeather(city)
  }

  getValue (key) {
    const { intl } = this.props
    const {
      main: { humidity, pressure } = {},
      sys: { sunrise, sunset } = {},
      wind = {},
      visibility
    } = this.props.data
    const value = {}

    if (key === 'humidity') {
      value.humidity = humidity
    } else if (key === 'wind') {
      value.direction = this.windDirection
      value.speed = wind.speed
    } else if (key === 'pressure') {
      value.pressure = pressure
    } else if (key === 'visibility') {
      value.visibility = Math.round(visibility / 1000).toFixed(1)
    } else if (key === 'sunrise') {
      value.time = intl.formatTime(sunrise)
    } else if (key === 'sunset') {
      value.time = intl.formatTime(sunset)
    }
    return value
  }

  get weatherIcon () {
    const { weather = [{}] } = this.props.data
    const { icon } = weather[0]
    return `${WEATHER_ICON_PATH_PREFIX}${icon}.png`
  }

  get temperature () {
    const {
      main: { temp: k } = {}
    } = this.props.data
    const { temperatureUnit } = this.state

    if (temperatureUnit === 'c') {
      return Math.round(k - 273.15)
    }
    return Math.round(1.8 * (k - 273.15)) + 32
  }

  get description () {
    const { weather = [{}] } = this.props.data
    const { description = '' } = weather[0]
    return description.replace(/(^|\s)[a-z]/g, str => str.toUpperCase())
  }

  get windDirection () {
    const { wind: { deg } = {} } = this.props.data
    const direction = [
      'N', 'NNE', 'NE', 'ENE',
      'E', 'ESE', 'SE', 'SSE',
      'S', 'SSW', 'SW', 'WSW',
      'W', 'WNW', 'NW', 'NNW'
    ]
    return deg ? direction[Math.floor((deg % 360) / 22.5)] : ''
  }

  render () {
    const { intl, loading } = this.props
    const {
      name,
      sys: { country } = {},
      dt
    } = this.props.data
    const { temperatureUnit } = this.state
    const isCelsius = temperatureUnit === 'c'

    return (
      <StyledContainer>
        <SearchBar
          round
          lightTheme
          onChangeText={this.fetchWeather}
          onClearText={this.fetchWeather}
          showLoadingIcon={loading}
          placeholder={intl.formatMessage({ id: 'placeholder_search_city' })}
        />

        <StyledBody>
          <StyledHeading>
            <StyledBlock>
              <Text h1>{`${name}, ${country}`}</Text>
            </StyledBlock>

            <StyledBlock>
              <StyledWeatherIcon source={{ uri: this.weatherIcon }} />
              <View>
                <StyledBlock>
                  <Text h2>{this.temperature}</Text>
                  {isCelsius && <StyledTemperatureIcon {...ICONS.celsius} />}
                  {!isCelsius && <StyledTemperatureIcon {...ICONS.fahrenheit} />}
                </StyledBlock>
                <Text h3>{this.description}</Text>
              </View>
            </StyledBlock>
          </StyledHeading>

          <StyledContent>
            {CONTENT_FIELD_ORDER.map(key => (
              <ListItem
                key={key}
                id={key}
                icon={ICONS[key]}
                value={this.getValue(key)}
              />
            ))}
          </StyledContent>

          <StyledFooter>
            {`${intl.formatMessage({ id: 'label_last_updated_time' })}: ${intl.formatRelative(convertTimestamp(dt))}`}
          </StyledFooter>
        </StyledBody>
      </StyledContainer>
    )
  }
}

WeatherAPP.propTypes = {
  intl: intlShape.isRequired
}

export default compose(
  connect(
    state => ({
      data: getData(state.weather),
      loading: getLoading(state.weather),
      error: getError(state.weather)
    }), {
      fetchWeather: actions.fetchWeatherRequest
    }
  ),
  injectIntl
)(WeatherAPP)
