import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

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

         <ScrollableTabView
            initialPage={1}
            renderTabBar={() => <ScrollableTabBar />}
         >
            <View tabLabel='Send' style={{flex:1, backgroundColor: 'red'}}><Text>Tab 1</Text></View>
            <View tabLabel='Balance' style={{flex:1, backgroundColor: 'green'}}><Text>Tab 2</Text></View>
            <View tabLabel='Recive' style={{flex:1, backgroundColor: 'blue'}}><Text>Tab 3</Text></View>
         </ScrollableTabView>
      )
   }
}

const styles = StyleSheet.create({});

export default TransactionScreen;
