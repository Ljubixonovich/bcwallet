import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

import HeadingText from '../../components/UI/HeadingText/HeadingText';
import bitcoinBlue from '../../assets/images/bitcoinBlue.png';
import bitcoinColorized from '../../assets/images/bitcoinColorized.png';


const balance = props => {
   let icon = (<Image resizeMode='cover' source={bitcoinColorized} style={styles.image} />);
   return (
      <View style={{flex:1, padding: 15,}}>
         <View style={StyleSheet.headerContainer}>
            <HeadingText>15.01</HeadingText>
            <Text style={{textAlign: 'center', paddingLeft: 50, fontSize: 18}}>ZBS</Text>
            {icon}
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   headerContainer: {
      flex: 1,
   },
   image: {
      height: 30,
      width: 30,
      borderRadius: 5
    },
});

export default balance;
