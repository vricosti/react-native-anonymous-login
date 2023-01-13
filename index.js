/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Don't know why and stackoverflow does not really help here but sometimes
// expo wants a app called main and sometimes it's the appName => registering two times
// Maybe if I get rid off expo it will solve it...
AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('main', () => App);