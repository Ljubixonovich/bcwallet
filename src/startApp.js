import { Navigation } from 'react-native-navigation';

const startApp = () => {

   Navigation.startSingleScreenApp({
      screen:
      {
         screen: 'bcwallet.LandingScreen',
         label: 'Obsnetwork',
         title: 'Obsnetwork'
      },
      appStyle: {
         orientation: 'portrait',
         navBarTitleTextCentered: true,
         navBarBackgroundColor: '#0cb',
         navBarTextFontFamily: 'notoserif'
      }
   });  
};

export default startApp;
