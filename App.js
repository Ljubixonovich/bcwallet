import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import LandingScreen from './src/screens/Landing/Landing';
import CreatePhraseScreen from './src/screens/CreatePhrase/CreatePhrase';
import CreatePassScreen from './src/screens/CreatePass/CreatePass';
import RestoreWalletScreen from './src/screens/RestoreWallet/RestoreWallet';
import TransactionScreen from './src/screens/Transaction/Transaction';
import MessagesScreen from './src/screens/Messages/Messages';
import ScanScreen from './src/screens/Scan/Scan';

import configureStore from './src/store/configureStore';
import startApp from './src/startApp';

const store = configureStore();

Navigation.registerComponent('mpwallet.LandingScreen', () => LandingScreen, store, Provider);
Navigation.registerComponent('mpwallet.CreatePhraseScreen', () => CreatePhraseScreen, store, Provider);
Navigation.registerComponent('mpwallet.CreatePassScreen', () => CreatePassScreen, store, Provider);
Navigation.registerComponent('mpwallet.RestoreWalletScreen', () => RestoreWalletScreen, store, Provider);
Navigation.registerComponent('mpwallet.TransactionScreen', () => TransactionScreen, store, Provider);
Navigation.registerComponent('mpwallet.MessagesScreen', () => MessagesScreen, store, Provider);
Navigation.registerComponent('mpwallet.ScanScreen', () => ScanScreen, store, Provider);


startApp();
