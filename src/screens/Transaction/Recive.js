import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import HeadingText from '../../components/UI/HeadingText/HeadingText';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';

const recive = props => {
   const myAddress = 'Lorem ipsum dolor sit amet, ne hinc delicatissimi usu, alia officiis vulputate ut mea. Tollit antiopam mediocritatem at eos. ';
   return (
      <View style={{flex:1, padding: 15,}}>
         <View style={StyleSheet.headerContainer}>
            <HeadingText>15.01</HeadingText>
            <Text style={{textAlign: 'center', paddingLeft: 50, fontSize: 18}}>ZBS</Text>
         </View>
         <View style={{flex:1, justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>My Address</Text>
            <Text>{myAddress}</Text>
         </View>
         <View style={{flex:2}}>

         </View>
         <View style={{flex:2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text>Amount</Text>
            <View style={{flex:1, marginLeft: 30, marginRight: 30}}>
               <DefaultInput placeholder='000' keyboardType='numeric'
                  style={styles.input}
               />
            </View>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   headerContainer: {
      flex: 1,
   },
   input: {
      backgroundColor: '#eee',
      borderColor: '#bbb',
      textAlign:'center',
   },
});

export default recive;
