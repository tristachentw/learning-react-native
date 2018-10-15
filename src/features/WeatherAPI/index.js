import React, { Component } from 'react'

import I18n from './i18n'
import App from './App'

class WeatherAPP extends Component {
  render () {
    return (
      <I18n>
        <App />
      </I18n>
    )
  }
}

export default WeatherAPP
