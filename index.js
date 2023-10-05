/**
 * @format
 */
/* eslint-disable */

import {AppRegistry} from 'react-native';
import { WelcomeScreen, LoginScreen } from './screens';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => () => <LoginScreen/>);
