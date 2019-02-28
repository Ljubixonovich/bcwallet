import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

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
         <View style={{flex: 1}}>
            <Text style={{fontSize: 32, textAlign:'center'}}>Obsnetwork</Text>
            <Button title='Create Wallet' onPress={this.createWalletHandler}/>
            <Button title='Restore Wallet' onPress={this.restoreWalletHandler}/>
         </View>
      );
    }

}


export default LandingScreen;
