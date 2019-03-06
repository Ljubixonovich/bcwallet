import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import HeadingText from '../../components/UI/HeadingText/HeadingText';

const balance = props => {
   return (
      <View style={{flex:1, padding: 15,}}>
         <View style={StyleSheet.headerContainer}>
            <HeadingText>15.01</HeadingText>
            <Text style={{textAlign: 'center', paddingLeft: 50, fontSize: 18}}>ZBS</Text>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   headerContainer: {
      flex: 1,
   },
});

export default balance;
