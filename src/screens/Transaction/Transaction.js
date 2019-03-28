import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Icons from 'react-native-vector-icons/Ionicons';

import Recive from './Recive';
import Balance from './Balance';
import Send from './Send';
import { colors } from '../../assets/index';


class TransactionScreen extends Component { 
   constructor(props) {
      super(props);
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
   } 
   
   static navigatorStyle = {
      topBarElevationShadowEnabled: false,
   };

   componentDidMount() {
      Icons.getImageSource('md-chatboxes', 30).then((sources) => {
         this.props.navigator.setButtons({
            rightButtons: [
                { id: 'messages', icon: sources }
            ]
        });        
     });
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

   tabChangeHandler = (arg) => {
      if (arg === 0) { 
         console.log('First Tab clicked');
      } else if (arg === 1) { 
         console.log('Second Tab clicked');
      } else if (arg === 2) {
         console.log('Third Tab clicked');
      }
   }

   render() {
      return (

         <ScrollableTabView
            initialPage={1} 
            renderTabBar={() => <ScrollableTabBar style={{backgroundColor:colors.red}} />}
            prerenderingSiblingsNumber={Infinity}
            onChangeTab={(arg) => this.tabChangeHandler(arg.i)}
         >
            <View tabLabel='Send' style={{flex:1}}>
               <Send navigator={this.props.navigator} />
            </View>
           
            <View tabLabel='Balance' style={{flex:1}}>
               <Balance />
            </View>

            <View tabLabel='Recive' style={{flex:1}}>
               <Recive />
            </View>
         </ScrollableTabView>
      )
   }
}

const styles = StyleSheet.create({});

export default TransactionScreen;
