import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

class CreatePhraseScreen extends Component {
   constructor(props) {
      super(props);
   }

   clikcHandler = () => {
      this.props.navigator.push({
         screen: 'bcwallet.CreatePassScreen',
         title: 'Create Pass'
      });
   }

   render() {
      return (
         <View>
            <Text> Create Phrase screen </Text>
            <Button title='Next' onPress={this.clikcHandler} />
         </View>
      )
   }
}

const styles = StyleSheet.create({})

export default CreatePhraseScreen;
