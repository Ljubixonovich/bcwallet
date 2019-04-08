import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { colors, constants } from '../../assets/index';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import Btn from '../../components/UI/ButtonWithBackground/ButtonWithBackground';


class LandingScreen extends Component {
   constructor(props) {
      super(props);
   }

   createWalletHandler = () => {
      this.props.navigator.push({
         screen: 'mpwallet.CreatePhraseScreen',
         title: 'Create Phrase',
       //  animationType: 'slide-up'
      });
   }

   restoreWalletHandler = () => {
      this.props.navigator.push({
         screen: 'mpwallet.RestoreWalletScreen',
         title: 'Restore Wallet',
      });
   }

   render() {
      return (
         <View style={styles.mainContainer}>
            <View>
               <HeadingText>{constants.mainTitle}</HeadingText>
            </View>
            <View style={{flex:1}}></View>
            <View style={styles.btnContainer}>
               <Btn textColor={colors.black} color={colors.red} width='50%'
                  onPress={this.createWalletHandler}>Create Wallet</Btn>
               <Btn textColor={colors.black} color={colors.red}  width='50%'
                  onPress={this.restoreWalletHandler}>Restore Wallet</Btn>
            </View>  
            <View style={{flex:2}}></View>     
         </View>
      );
    }
}

const styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
      padding: 15,
   },
   btnContainer: {
      flex: 2,
      justifyContent: 'space-evenly',
      alignItems: 'center',    
   },
});


export default LandingScreen;
