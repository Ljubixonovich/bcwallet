import { Navigation } from 'react-native-navigation';
import{ Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const startApp = () => {

  Promise.all([
    Icon.getImageSource(Platform.OS === 'android' ? 'md-map' : 'ios-map', 30),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-share-alt' : 'ios-share', 30),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30)
  ]).then(sources => {
      Navigation.startSingleScreenApp({
        screen: 
          {
            screen: 'bcwallet.LandingScreen',
            label: 'Obsnetwork',
            title: 'Obsnetwork'
          }     
      });
  });
};

export default startApp;
