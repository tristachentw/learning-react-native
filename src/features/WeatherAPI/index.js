import React, { Component } from 'react'
import { Provider } from 'react-redux'

import I18n from './i18n'
import App from './App'
import store from './redux/configureStore'

class WeatherAPP extends Component {
  constructor (props) {
    super(props)
    this.store = store()
  }

  render () {
    return (
      <Provider store={this.store}>
        <I18n>
          <App />
        </I18n>
      </Provider>
    )
  }
}

export default WeatherAPP
