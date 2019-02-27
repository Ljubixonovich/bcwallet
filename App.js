import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import LandingScreen from './src/screens/landingScreen/landingScreen';

import configureStore from './src/store/configureStore';
import startApp from './src/startApp';

const store = configureStore();

Navigation.registerComponent('bcwallet.LandingScreen', () => LandingScreen, store, Provider);


startApp();
