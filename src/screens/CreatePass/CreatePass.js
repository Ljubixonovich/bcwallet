import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

class CreatePassScreen extends Component {
   constructor(props) {
      super(props);
   }

   skipHandler = () => {
      this.props.navigator.push({
         screen: 'bcwallet.TransactionScreen',
         title: 'Transactions'
      });
   }

   nextHandler = () => {
      this.props.navigator.push({
         screen: 'bcwallet.TransactionScreen',
         title: 'Transactions'
      });
   }

   render() {
      return (
         <View>
            <Text> Create Pass screen </Text>
            <Button title='Skip' onPress={this.skipHandler} />
            <Button title='Next' onPress={this.nextHandler} />
         </View>
      )
   }
}

const styles = StyleSheet.create({})

export default CreatePassScreen;
