/** @format */
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)

// enable network info in react-native debug tool
global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest
