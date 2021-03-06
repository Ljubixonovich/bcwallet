import React, { Component } from 'react';
import { Text, StyleSheet, View, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';

import { colors, constants } from '../../assets/index';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import Btn from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import validate from '../../utility/validation';

class CreatePassScreen extends Component {
   constructor(props) {
      super(props);
   }

   state = {
      freshlyLoaded: true,
      controls: {
         password: {
            value: '',
            valid: false,
            validationRules: {
               minLength: 6
            },
            touched: false
         },
         confirmPassword: {
            value: '',
            valid: false,
            validationRules: {
               equalTo: 'password'
            },
            touched: false
         }
      }
   };

   updateInputState = (key, value) => {
      let connectedValue = {};
      if (this.state.controls[key].validationRules.equalTo) {
         const equalControl = this.state.controls[key].validationRules.equalTo;
         const equalValue = this.state.controls[equalControl].value;
         connectedValue = {
            ...connectedValue,
            equalTo: equalValue
         };
      }
      if (key === 'password') {
         connectedValue = {
            ...connectedValue,
            equalTo: value
         };
      }
      this.setState(prevState => {
         return {
            controls: {
               ...prevState.controls,
               confirmPassword: {
                  ...prevState.controls.confirmPassword,
                  valid:
                     key === 'password'
                        ? validate(
                           prevState.controls.confirmPassword.value,
                           prevState.controls.confirmPassword.validationRules,
                           connectedValue
                        )
                        : prevState.controls.confirmPassword.valid
               },
               [key]: {
                  ...prevState.controls[key],
                  value: value,
                  valid: validate(value, prevState.controls[key].validationRules, connectedValue),
                  touched: true
               }

            }
         };
      });
   };

   skipHandler = () => {
      this.setState(prevState => {
         return {
            ...prevState,
            freshlyLoaded: false
         };
      });
      this.props.navigator.push({
         screen: 'mpwallet.TransactionScreen',
         title: 'Transactions'
      });
   }

   nextHandler = () => {
      this.setState(prevState => {
         return {
            ...prevState,
            freshlyLoaded: false
         };
      });
      this.props.navigator.push({
         screen: 'mpwallet.TransactionScreen',
         title: 'Transactions'
      });
   }

   render() {
      return (
         <KeyboardAvoidingView style={styles.mainContainer}
            behavior={Platform.OS === "ios" || this.state.freshlyLoaded ? "padding" : null}
         >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
               <View style={{ flex: 3 }}>
                  <View style={{ flex: 1 }}>
                     <HeadingText>{constants.mainTitle}</HeadingText>
                     <Text style={{ textAlign: 'center', marginTop: 10 }}>
                        Please select a password to protect your wallet
                     </Text>
                  </View>
                  <View style={styles.inputContainer}>
                     <DefaultInput placeholder='Password' style={styles.input}
                        value={this.state.controls.password.value}
                        onChangeText={(val) => this.updateInputState('password', val)}
                        valid={this.state.controls.password.valid}
                        touched={this.state.controls.password.touched}
                        secureTextEntry
                     />
                     <DefaultInput placeholder='Confirm Password' style={styles.input}
                        value={this.state.controls.confirmPassword.value}
                        onChangeText={(val) => this.updateInputState('confirmPassword', val)}
                        valid={this.state.controls.confirmPassword.valid}
                        touched={this.state.controls.confirmPassword.touched}
                        secureTextEntry
                     />
                  </View>
               </View>
            </TouchableWithoutFeedback>

            <View style={styles.btnContainer}>
               <Btn textColor={colors.black} color={colors.red}
                  onPress={this.skipHandler}
               >Skip</Btn>
               <Btn textColor={colors.black} color={colors.red}
                  disabled={
                     !this.state.controls.password.valid ||
                     !this.state.controls.confirmPassword.valid}
                  onPress={this.nextHandler}
               >Next</Btn>
            </View>
         </KeyboardAvoidingView>
      )
   }
}

const styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
      padding: 15,
   },
   inputContainer: {
      flex: 2,
      justifyContent: 'flex-start',
      marginLeft: 40,
      marginRight: 40,
   },
   btnContainer: {
      flex: 2,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-evenly',
   },
   input: {
      backgroundColor: '#eee',
      borderColor: '#bbb',
      textAlign: 'center',
   },
});

export default CreatePassScreen;
