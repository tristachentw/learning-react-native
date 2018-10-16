import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import store from './redux/configureStore'
import I18n from './i18n'
import theme from './style/theme'
import App from './App'

class WeatherAPP extends Component {
  constructor (props) {
    super(props)
    this.store = store()
  }

  render () {
    return (
      <Provider store={this.store}>
        <I18n>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </I18n>
      </Provider>
    )
  }
}

export default WeatherAPP
