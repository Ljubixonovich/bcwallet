import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

class RestoreWalletScreen extends Component {
   constructor(props) {
      super(props);
   }

   nextHandler = () => {
      this.props.navigator.push({
         screen: 'bcwallet.TransactionScreen',
         title: 'Transactions',
        // backButtonHidden: true
      });
   }

  render() {
    return (
      <View>
        <Text> RestoreWallet screen </Text>
        <Button title='Next' onPress={this.nextHandler} />
      </View>
    )
  }
}

const styles = StyleSheet.create({})

export default RestoreWalletScreen;
