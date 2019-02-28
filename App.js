import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import LandingScreen from './src/screens/Landing/Landing';
import CreatePhraseScreen from './src/screens/CreatePhrase/CreatePhrase';
import CreatePassScreen from './src/screens/CreatePass/CreatePass';
import RestoreWalletScreen from './src/screens/RestoreWallet/RestoreWallet';
import TransactionScreen from './src/screens/Transaction/Transaction';
import MessagesScreen from './src/screens/Messages/Messages';

import configureStore from './src/store/configureStore';
import startApp from './src/startApp';

const store = configureStore();

Navigation.registerComponent('bcwallet.LandingScreen', () => LandingScreen, store, Provider);
Navigation.registerComponent('bcwallet.CreatePhraseScreen', () => CreatePhraseScreen, store, Provider);
Navigation.registerComponent('bcwallet.CreatePassScreen', () => CreatePassScreen, store, Provider);
Navigation.registerComponent('bcwallet.RestoreWalletScreen', () => RestoreWalletScreen, store, Provider);
Navigation.registerComponent('bcwallet.TransactionScreen', () => TransactionScreen, store, Provider);
Navigation.registerComponent('bcwallet.MessagesScreen', () => MessagesScreen, store, Provider);


startApp();
