import 'intl'
import 'intl/locale-data/jsonp/en'
import 'intl/locale-data/jsonp/en-US'
import 'intl/locale-data/jsonp/zh'
import 'intl/locale-data/jsonp/zh-Hant'
import 'intl/locale-data/jsonp/zh-Hant-TW'
import React, { Component } from 'react'
import { node } from 'prop-types'
import { Text } from 'react-native'
import RNLanguages from 'react-native-languages'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'
import zhTW from './locale/zh_TW'
import enUS from './locale/en_US'

addLocaleData([...en, ...zh])

class I18n extends Component {
  get locale () {
    return RNLanguages.language
  }

  get messages () {
    switch (this.locale.split('_')[0]) {
      case 'en':
        return enUS
      case 'zh':
        return zhTW
      default:
        return enUS
    }
  }

  render () {
    return (
      <IntlProvider
        locale={this.locale}
        messages={enUS}
        textComponent={Text}
        onError={err => console.warn(err)}
      >
        {this.props.children}
      </IntlProvider>
    )
  }
}

I18n.propTypes = {
  children: node
}

export default I18n
