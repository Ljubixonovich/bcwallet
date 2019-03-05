import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

import ListItem from '../../components/ListItem/ListItem';

class MessagesScreen extends Component {
   constructor(props) {
      super(props);
   }

   mockMessages = [
      'Aldrop received!',
      'Network upgrade',
      'Use our coins in another restaurant!',
      'Bla bla'
   ];

  render() {
    return (
      <View style={styles.mainContainer}>
         <FlatList style={styles.listContainer} 
            data={this.mockMessages}
            renderItem={(m) => (
               // <ListItem>{m.item}</ListItem>
               <Text>{m.item}</Text>
            )}
         
         />
      </View>
    )
  }
}

const styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
      padding: 15,
   },
   listContainer: {
      width: '100%'
   },

});

export default MessagesScreen;
