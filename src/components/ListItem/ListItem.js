import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image resizeMode='cover' source={props.personImage} style={styles.personImage} />
      <Text>{props.text}</Text>
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
    backgroundColor: '#f00',
   // borderBottomWidth: 1
  },
  personImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

export default listItem;