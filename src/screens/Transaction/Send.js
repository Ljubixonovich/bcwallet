import React, { Component } from 'react';
import {
   Text, StyleSheet, View, Image, Keyboard,
   TouchableWithoutFeedback, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import bitcoinColorized from '../../assets/images/bitcoinColorized.png';

class send extends Component {
   constructor(props) {
      super(props);
   }

   qrScanHandler = () => {
      
   }

   render() {
      return (
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.mainContainer}>
               <View style={{ flex: 1 }}></View>
               <View style={styles.qrInputContainer}>
                  <Image resizeMode='cover'
                     source={bitcoinColorized}
                     style={styles.bitCoinIcon}
                  />
                  <Text> -></Text>
                  <View style={styles.inputContainer}>
                     <DefaultInput
                        placeholder='Pay to'
                        style={styles.input}
                     />
                  </View>
                  <TouchableOpacity onPress={this.qrScanHandler}>
                     <Icon name='md-qr-scanner' size={30} />
                  </TouchableOpacity>
               </View>

               <View style={styles.amountInputContainer}>
                  <Text>Amount</Text>
                  <View style={styles.inputContainer}>
                     <DefaultInput
                        placeholder='000'
                        keyboardType='numeric'
                        style={[styles.input, { width: '60%' }]}
                     />
                  </View>
               </View>
               <View style={{ flex: 2 }}></View>
            </View>
         </TouchableWithoutFeedback>
      );
   }
};

const styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
      padding: 15,
   },
   qrInputContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
   },
   amountInputContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    //  justifyContent: 'flex-end'
   },
   inputContainer: {
      flex: 1,
      marginLeft: 30,
      marginRight: 30,
      justifyContent: 'flex-end'
   },
   bitCoinIcon: {
      height: 30,
      width: 30,
      borderRadius: 5
   },
   input: {
      backgroundColor: '#eee',
      borderColor: '#bbb',
      textAlign: 'center',
   },
});

export default send;
