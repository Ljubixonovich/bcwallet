import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';

const send = props => {
   return (
      <View style={{flex:1, padding: 15,}}>
      <View style={{flex:1}}></View>
         <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
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
   input: {
      backgroundColor: '#eee',
      borderColor: '#bbb',
      textAlign:'center',
   },
});

export default send;
