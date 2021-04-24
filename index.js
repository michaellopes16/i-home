/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Setup from './Setup';
import {name as appName} from './app.json';
import * as database from '@react-native-firebase/database';
import * as firebase from "@react-native-firebase/app";

  // database
  // .setPersistenceEnabled(true)
  // .then(() => console.log('Realtime Database persistence enabled'));
AppRegistry.registerComponent(appName, () => Setup);
