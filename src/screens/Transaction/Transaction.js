import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import mockIcon from '../../diamond.png';


class TransactionScreen extends Component {
   // Navigation
   static navigatorButtons = {
      rightButtons: [
         {
            titile: 'messages',
            id: 'messages',
            icon: mockIcon
         }
      ]
   };

   constructor(props) {
      super(props);
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
   }

   onNavigatorEvent = (event) => {
      if (event.type == 'NavBarButtonPress') {
         if (event.id == 'messages') {
            this.props.navigator.push({
               screen: 'bcwallet.MessagesScreen',
               title: 'Messages'
            });
         }
      }
   }

   render() {
      return (
         <View>
            <Text> Transaction Screen </Text>
         </View>
      )
   }
}

const styles = StyleSheet.create({});

export default TransactionScreen;
