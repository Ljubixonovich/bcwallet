import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import HeadingText from '../../components/UI/HeadingText/HeadingText';
import Btn from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

class LandingScreen extends Component {
   constructor(props) {
      super(props);
   }

   createWalletHandler = () => {
      this.props.navigator.push({
         screen: 'bcwallet.CreatePhraseScreen',
         title: 'Create Phrase'
      });
   }

   restoreWalletHandler = () => {
      this.props.navigator.push({
         screen: 'bcwallet.RestoreWalletScreen',
         title: 'Restore Wallet'
      });
   }

   render() {
      return (
         <View style={styles.mainContainer}>
            <View>
               <HeadingText>Obsnetwork</HeadingText>
            </View>
            <View style={styles.btnContainer}>
               <Btn textColor='black' color='#0cb' 
                  onPress={this.createWalletHandler}>Create Wallet</Btn>
               <Btn textColor='black' color='#0cb' 
                  onPress={this.restoreWalletHandler}>Restore Wallet</Btn>
            </View>       
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
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
});


export default LandingScreen;
