import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import bitcoinColorized from '../../assets/images/bitcoinColorized.png';

const balanceListItem = (props) => {
   let to_from = props.item.recived ? 'From:' : 'To:';
   let amount = (props.item.recived ? '+' : '-') + props.item.amount;
   let icon = (<Image resizeMode='cover' source={bitcoinColorized} style={styles.image}/>);
   let iconWithArrow = props.item.recived ? 
      (<View style={styles.iconWithArrow}>
         <Text style={{fontWeight:'bold'}}> -></Text>
         {icon}
      </View>) :
      (<View style={styles.iconWithArrow}>
         {icon}
         <Text style={{fontWeight:'bold'}}>-> </Text>
      </View>); 
   
   return (
      <TouchableOpacity onPress={props.onItemPressed}>
         <View style={styles.listItem}>

            {iconWithArrow}

            <View style={{flex:11, paddingLeft: 6, paddingRight: 15}}>
               <Text>{to_from}</Text>
               <Text style={{color: '#333'}}>{props.item.address}</Text>
            </View>

            <View style={{flex:4}}>
               <Text>{props.item.date}</Text>
               <Text style={{fontWeight:'bold'}}>
                  {amount} {props.item.currency}
               </Text>
            </View>
         </View>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   listItem: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      paddingTop: 10, 
      paddingBottom: 10,
      marginBottom: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#bbb',
   },
   iconWithArrow: {
      flex: 2,
      flexDirection: 'row', 
      alignItems: 'center',
      marginRight: 12,
   },
   image: {
      height: 30,
      width: 30,
      borderRadius: 5
   },
});

export default balanceListItem;