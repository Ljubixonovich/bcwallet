import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image resizeMode='cover' source={props.item.image} style={styles.image} />
      <Text style={{color: '#333'}}>{props.item.message}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',

   // BOX-ALIKE style 
   //  borderRightWidth: 2,
   //  borderRightColor: '#bbb',
   //  backgroundColor: '#eee',
  },
  image: {
    marginRight: 12,
    height: 30,
    width: 30,
    borderRadius: 5
  },
});

export default listItem;