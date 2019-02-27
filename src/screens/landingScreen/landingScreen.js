import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class LandingScreen extends Component {
   constructor(props) {
      super(props);
   }

   clickHandler = () => {
      alert('working...');
   }

   render() {
      return (
         <View style={{flex: 1}}>
            <Text>Landing screen</Text>
            <Button title='Mock Btn' onPress={this.clickHandler}/>
         </View>
      );
    }

}


export default LandingScreen;
