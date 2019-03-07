import React from 'react';
import { Text, StyleSheet, View, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';

import HeadingText from '../../components/UI/HeadingText/HeadingText';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import qrImage from '../../assets/images/qrCode.png';


const recive = props => {
   const myAddress = 'Lorem ipsum dolor sit amet, ne hinc delicatissimi usu, alia officiis vulputate ut mea. Tollit antiopam mediocritatem at eos. ';
   return (
      <KeyboardAvoidingView style={styles.mainContainer}>
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 3 }}>
               <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text style={{ fontWeight: 'bold' }}>My Address</Text>
                  <Text>{myAddress}</Text>
               </View>
               <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                  <Image resizeMode='cover' source={qrImage} style={styles.image} />
               </View>
            </View>
         </TouchableWithoutFeedback>
         <View style={styles.inputContainer}>
            <Text>Amount</Text>
            <View style={{ flex: 1, marginLeft: 30, marginRight: 30 }}>
               <DefaultInput placeholder='000' keyboardType='numeric'
                  style={styles.input}
               />
            </View>
         </View>
      </KeyboardAvoidingView>
   );
};

const styles = StyleSheet.create({
   mainContainer: {
      flex: 1, 
      padding: 15,
      justifyContent: 'flex-end'
   },
   inputContainer: {
      flex: 2, 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between',
   },
   image: {
      marginTop: 42,
      height: 180,
      width: 180,
   },
   input: {
      backgroundColor: '#eee',
      borderColor: '#bbb',
      textAlign: 'center',
   },
});

export default recive;
