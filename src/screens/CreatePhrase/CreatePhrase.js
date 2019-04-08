import React, { Component } from 'react';
import { Text, StyleSheet, View, Switch } from 'react-native';

import { colors, constants } from '../../assets/index';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import Btn from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

class CreatePhraseScreen extends Component {
   constructor(props) {
      super(props);
   }

   state = {
      recoverySwitch: false
   }

   restoreWalletHandler = () => {
      this.props.navigator.push({
         screen: 'mpwallet.CreatePassScreen',
         title: 'Create Pass'
      });
   }

   recoverySwitchHadler = () => {
      this.setState({recoverySwitch: !this.state.recoverySwitch});
   }

   render() {
      let mockText = 'Lorem ipsum dolor sit amet, ne hinc delicatissimi usu, alia officiis vulputate ut mea. Tollit antiopam mediocritatem at eos. Et vim singulis laboramus consectetuer, cum eligendi assueverit at, no odio altera repudiandae mea. Id dictas liberavisse philosophia nec. Ei ferri alterum aliquam quo, ut mea alia salutandi.';
      return (
         <View style={styles.mainContainer}>
            <View style={{flex:1}}>
               <HeadingText>{constants.mainTitle}</HeadingText>
               <Text style={{textAlign: 'center'}}>
                  Please write it down on a paper and keep it in a safe place
               </Text>
            </View>
            <View style={{flex:2, flexDirection:'row'}}>
               <View style={{flex:1}}></View>
               <View style={{flex:3}}>
                  <Text>
                     {mockText}
                  </Text>
               </View>
               <View style={{flex:1}}></View>
            </View>
            <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
               <Switch onValueChange={this.recoverySwitchHadler} value={this.state.recoverySwitch} />
               <Text style={{marginLeft: 15}}>I have safely stored my recovery phrase</Text>
            </View>
            <View style={styles.btnContainer}>
               <Btn textColor={colors.black} color={colors.red} disabled={!this.state.recoverySwitch}  
                  onPress={this.restoreWalletHandler}
               >Next</Btn>
            </View>     
         </View>
      )
   }
}

const styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
      padding: 15,
   },
   btnContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
})

export default CreatePhraseScreen;
