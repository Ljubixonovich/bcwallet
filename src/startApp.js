import { Navigation } from 'react-native-navigation';

import { colors, constants } from './assets/index';

const startApp = () => {

   Navigation.startSingleScreenApp({
      screen:
      {
         screen: 'mpwallet.LandingScreen',
         label: constants.mainTitle,
         title: constants.mainTitle
      },
      appStyle: {
         orientation: 'portrait',
         navBarTitleTextCentered: true,
         navBarBackgroundColor: colors.red,
         navBarTextFontFamily: 'notoserif'
      }
   });  
};

export default startApp;
