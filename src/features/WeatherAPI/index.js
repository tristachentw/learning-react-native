import React, { Component } from 'react'
import { View } from 'react-native'
import { SearchBar, Text, Icon } from 'react-native-elements'
import styled from 'styled-components'

import { searchCityWeather } from './api'
import Bg from './bg.jpg'

const StyledText = styled(Text)`
  color: #fff;
`
const StyledIcon = styled(Icon).attrs({
  color: '#fff'
})``
const StyledContainer = styled.ImageBackground.attrs({
  source: Bg
})`
  width: 100%;
  height: 100%;
`
const StyledBody = styled.View`
  flex: 1;
`
const StyledBlock = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-left: 20;
  padding-right: 20;
`
const StyledHeading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
const StyledHeadingIcon = styled(StyledIcon).attrs({
  size: 40
})``
const StyledCapitalize = styled(StyledText)`
  text-transform: capitalize;
`
const StyledListItem = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-top: 15;
  padding-bottom: 15;
`
const StyledListItemLabel = styled.View`
  width: 35%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const StyledListItemValue = styled(StyledText)`
  margin-left: 10;
  font-size: 18;
`
const StyledImage = styled.Image`
  width: 150;
  height: 150;
  margin-left: 10;
  margin-right: 10;
`
const StyledFooter = styled(StyledText)`
  align-self: flex-end;
  margin-top: 20;
  margin-bottom: 10;
  margin-left: 5;
  margin-right: 5;
`

const ListItem = ({ icon, title, value }) => (
  <StyledListItem>
    <StyledListItemLabel>
      <StyledIcon {...icon} />
      <StyledText>{title}</StyledText>
    </StyledListItemLabel>
    <StyledListItemValue>{value}</StyledListItemValue>
  </StyledListItem>
)

class WeatherAPI extends Component {
  constructor (props) {
    super(props)
    this.state = {
      temperatureUnit: 'c'
    }
    this.getWeather = this.getWeather.bind(this)
  }

  getWeather (city) {
    searchCityWeather(city)
      .then(response => {
        console.log(response)
        this.setState({ ...response })
      })
      .catch(error => console.error(error))
  }

  formatSunTime (ts) {
    return new Date(ts * 1000).toLocaleString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: 'numeric'
    })
  }

  get icon () {
    const { weather = [{}] } = this.state
    const { icon } = weather[0]
    return `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${icon}.png`
  }

  get temperature () {
    const {
      main: { temp: k } = {},
      temperatureUnit
    } = this.state

    if (temperatureUnit === 'c') {
      return Math.round(k - 273.15)
    }
    return Math.round(1.8 * (k - 273.15)) + 32
  }

  get description () {
    const { weather = [{}] } = this.state
    const { description } = weather[0]
    return description
  }

  get windDirection () {
    const { wind: { deg } = {} } = this.state
    const direction = [
      'N', 'NNE', 'NE', 'ENE',
      'E', 'ESE', 'SE', 'SSE',
      'S', 'SSW', 'SW', 'WSW',
      'W', 'WNW', 'NW', 'NNW'
    ]
    return direction[Math.floor((deg % 360) / 22.5)]
  }

  render () {
    const {
      name,
      main: { humidity, pressure } = {},
      sys: { country, sunrise, sunset } = {},
      wind = {},
      visibility,
      coord = {},
      dt,
      temperatureUnit
    } = this.state
    const isCelsius = temperatureUnit === 'c'

    return (
      <StyledContainer>
        <SearchBar
          round
          lightTheme
          onChangeText={this.getWeather}
          onClearText={this.getWeather}
          placeholder='Enter city'
        />

        <StyledBody>
          <StyledHeading>
            <StyledBlock>
              <StyledText h2>{`${name}, ${country}`}</StyledText>
              <StyledIcon name='place' />
              <StyledText>{`${coord.lon}, ${coord.lat}`}</StyledText>
            </StyledBlock>

            <StyledBlock>
              <StyledImage source={{ uri: this.icon }} />
              <View>
                <StyledBlock>
                  <StyledText h2>{this.temperature}</StyledText>
                  {isCelsius && <StyledHeadingIcon
                    type='material-community'
                    name='temperature-celsius'
                  />}
                  {!isCelsius && <StyledHeadingIcon
                    type='material-community'
                    name='temperature-fahrenheit'
                  />}
                </StyledBlock>
                <StyledCapitalize h4>{this.description}</StyledCapitalize>
              </View>
            </StyledBlock>
          </StyledHeading>

          <StyledBlock>
            <ListItem
              icon={{
                type: 'material-community',
                name: 'water-percent'
              }}
              title='Humidity'
              value={`${humidity}%`}
            />

            <ListItem
              icon={{
                type: 'material-community',
                name: 'weather-windy'
              }}
              title='Wind'
              value={`${this.windDirection} ${wind.speed} m/s`}
            />
          </StyledBlock>

          <StyledBlock>
            <ListItem
              icon={{
                type: 'font-awesome',
                name: 'dashboard'
              }}
              title='Pressure'
              value={`${pressure} hPa`}
            />
            <ListItem
              icon={{
                name: 'visibility'
              }}
              title='Visibility'
              value={`${Math.round(visibility / 1000).toFixed(1)} km`}
            />
          </StyledBlock>

          <StyledBlock>
            <ListItem
              icon={{
                type: 'material-community',
                name: 'weather-sunset-up'
              }}
              title='Sunrise'
              value={this.formatSunTime(sunrise)}
            />
            <ListItem
              icon={{
                type: 'material-community',
                name: 'weather-sunset-down'
              }}
              title='Sunset'
              value={this.formatSunTime(sunset)}
            />
          </StyledBlock>

          <StyledFooter>{`Updated Time: ${new Date(dt * 1000).toLocaleString()}`}</StyledFooter>
        </StyledBody>
      </StyledContainer>
    )
  }
}

export default WeatherAPI