/**
 * @format
 */
/* eslint-disable */

import {AppRegistry} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => () => <WelcomeScreen/>);
