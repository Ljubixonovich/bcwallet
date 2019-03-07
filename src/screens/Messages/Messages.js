import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

import ListItem from '../../components/ListItem/ListItem';
import img1 from '../../assets/images/avenue.jpg';
import img2 from '../../assets/images/fall.jpg';
import img3 from '../../assets/images/winter.jpg';
import img4 from '../../assets/images/sunset.jpg';

class MessagesScreen extends Component {
   constructor(props) {
      super(props);
   }

   mockMessages = [
      {
         id: 1,
         message: 'Aldrop received!',
         image: img1
      },
      {
         id: 2,
         message: 'Network upgrade',
         image: img2
      },
      {
         id: 3,
         message: 'Use our coins in another restaurant!',
         image: img3
      },
      {
         id: 4,
         message: 'Bla bla',
         image: img4
      }
   ];

   onMessagePressed = (id, item) => {
    //  alert('id: ' + id + ', message: ' + item);
   }

  render() {
    return (
      <View style={styles.mainContainer}>
         <FlatList style={styles.listContainer} 
            data={this.mockMessages}
            keyExtractor={item => item.id.toString()}
            renderItem={(m) => (
               <ListItem item={m.item}
                  onItemPressed={() => this.onMessagePressed(m.item.id, m.item.message)}
               />
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
      width: '100%',
      marginTop: 10
   },

});

export default MessagesScreen;
