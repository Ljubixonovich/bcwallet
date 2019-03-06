import React from 'react';
import { Text, StyleSheet, View, ScrollView, FlatList } from 'react-native';

import BalanceListItem from '../../components/BalanceListItem/BalanceListItem';
import HeadingText from '../../components/UI/HeadingText/HeadingText';


const balance = props => {
   let mockData = [
      {
         id: 1,
         message: 'Aldrop received!',
         recived: true,
         address: 'Sunset Bulevar 189, NY',
         currency: 'ZBS',
         amount: 347.34,
         date: '5.3.2019.'
      },
      {
         id: 2,
         message: 'Network upgrade',
         recived: false,
         address: 'Star Street 77, Vienna',
         currency: 'ZBS',
         amount: 19.99,
         date: '21.2.2019.'
      },
      {
         id: 3,
         message: 'Use our coins in another restaurant!',
         recived: false,
         address: 'Welcome Avenue 49, Novi Sad',
         currency: 'ZBS',
         amount: 8.67,
         date: '27.1.2019.'
      },
      {
         id: 4,
         message: 'Bla bla',
         recived: true,
         address: 'Main Square, Hong Kong',
         currency: 'ZBS',
         amount: 4.55,
         date: '31.12.2018.'
      },
      {
         id: 12,
         message: 'Aldrop received!',
         recived: true,
         address: 'Sunset Bulevar 189, NY',
         currency: 'ZBS',
         amount: 347.34,
         date: '5.3.2019.'
      },
      {
         id: 22,
         message: 'Network upgrade',
         recived: false,
         address: 'Star Street 77, Vienna',
         currency: 'ZBS',
         amount: 19.99,
         date: '21.2.2019.'
      },
      {
         id: 32,
         message: 'Use our coins in another restaurant!',
         recived: false,
         address: 'Welcome Avenue 49, Novi Sad',
         currency: 'ZBS',
         amount: 8.67,
         date: '27.1.2019.'
      },
      {
         id: 42,
         message: 'Bla bla',
         recived: true,
         address: 'Main Square, Hong Kong',
         currency: 'ZBS',
         amount: 4.55,
         date: '31.12.2018.'
      },
      {
         id: 11,
         message: 'Aldrop received!',
         recived: true,
         address: 'Sunset Bulevar 189, NY',
         currency: 'ZBS',
         amount: 347.34,
         date: '5.3.2019.'
      },
      {
         id: 21,
         message: 'Network upgrade',
         recived: false,
         address: 'Star Street 77, Vienna',
         currency: 'ZBS',
         amount: 19.99,
         date: '21.2.2019.'
      },
      {
         id: 31,
         message: 'Use our coins in another restaurant!',
         recived: false,
         address: 'Welcome Avenue 49, Novi Sad',
         currency: 'ZBS',
         amount: 8.67,
         date: '27.1.2019.'
      },
      {
         id: 41,
         message: 'Bla bla',
         recived: true,
         address: 'Main Square, Hong Kong',
         currency: 'ZBS',
         amount: 4.55,
         date: '31.12.2018.'
      },
   ];

   return (
      <ScrollView>
      <View style={{flex:1, padding: 15,}}>
         <View style={StyleSheet.headerContainer}>
            <HeadingText>15.01</HeadingText>
            <Text style={{textAlign: 'center', paddingLeft: 50, fontSize: 18}}>ZBS</Text>
         </View>
         <View style={styles.listContainer}>
            <FlatList 
               data={mockData}
               keyExtractor={item => item.id.toString()}
               renderItem={(m) => (
                  <BalanceListItem item={m.item}
                    // onItemPressed={() => this.onMessagePressed(m.item.id, m.item.message)}
                  />
               )}         
            />
         </View>
      </View>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   headerContainer: {
      flex: 1,
   },
   listContainer: {
      flex: 2,
      justifyContent: 'space-evenly'
   },
});

export default balance;
