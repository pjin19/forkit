import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import { Font } from 'expo';
import axios from 'axios';
import bcrypt from 'bcryptjs'

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first: '',
      last: '',
      email: '',
      password: ''
    };
  }

  firstName(ev) {
    ev.preventDefault();
    this.setState({
      first: ev.target.value
    });
  }

  lastName(ev) {
    ev.preventDefault();
    this.setState({
      last: ev.target.value
    });
  }

  emailChange(ev) {
    ev.preventDefault();
    this.setState({
      email: ev.target.value
    });
  }

  passwordChange(ev) {
    ev.preventDefault();
    this.setState({
      password: ev.target.value
    });
  }

  register(ev) {
    ev.preventDefault();
    var salt = bcrypt.genSaltSync(10);
    axios({
      method: 'POST',
      url: 'https://guarded-dawn-44803.herokuapp.com/db/insertrows',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        password: '$BIG_SHAQ102$',
        tableName: 'users',
        params: `{"firstname": "${this.state.first}", "lastname":"${this.state.last}","email":"${this.state.email}","password":"${bcrypt.hashSync(this.state.password, salt)}"}`
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log('ERROR', e);
    })
  }


  render() {
    return (
      <LinearGradient colors={['#303F4C', '#3B4955', '#AFAFAF']} style={styles.background} location={[0.3, 0.4, 1]}>
        <View style={styles.container}>
          <Image style={styles.logotext} source={require("../assets/DesktopCopy3trans.png")}/>
          <View style={styles.inputForm}>
            <View style={styles.input}>
              <Image style={styles.userIcon} source={require("../assets/username.png")}/>
              <TextInput style={styles.inputText} placeholder={'First Name'} onChangeText={(ev) => this.firstName(ev)}/>
            </View>
            <View style={styles.input}>
              <Image style={styles.userIcon} source={require("../assets/username.png")}/>
              <TextInput style={styles.inputText} placeholder={'Last Name'} onChangeText={(ev) => this.lastName(ev)}/>
            </View>
            <View style={styles.input}>
              <Image style={styles.userIcon} source={require("../assets/username.png")} onChangeText={(ev) => this.emailChange(ev)}/>
              <TextInput style={styles.inputText} placeholder={'Email'}/>
            </View>
            <View style={styles.input}>
              <Image style={styles.passIcon} source={require("../assets/password.png")}/>
              <TextInput style={styles.inputText} placeholder={'Password'} onChangeText={(ev) => this.passwordChange(ev)}/>
            </View>
          </View>
          <View style={styles.buttonForm}>
            <TouchableOpacity style={styles.loginButton} onPress={(ev) => this.register(ev)}>
              <Text style={styles.loginText}> CREATE ACCOUNT </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fbButton} onPress={Actions.login}>
              <Image style={styles.fbIcon} source={require("../assets/fb.png")}/>
              <Text style={styles.fbText}> CREATE WITH FACEBOOK </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: verticalScale(700),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  container: {
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: verticalScale(500),
    width: scale(300),
    bottom: verticalScale(100)
  },
  logotext: {
    height: verticalScale(175),
    width: scale(250)
  },
  inputForm: {
    height: verticalScale(225),
    width: scale(300),
    justifyContent: 'space-around'
  },
  userIcon: {
    height: verticalScale(20),
    width: scale(20),
    left: 8
  },
  passIcon: {
    height: verticalScale(25),
    width: scale(25),
    left: 5
  },
  input: {
    height: verticalScale(45),
    width: scale(300),
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 20
  },
  inputText: {
    position: 'absolute',
    fontFamily: 'Futura',
    fontSize: moderateScale(15),
    color: 'grey',
    left: scale(30)
  },
  forgetText: {
    fontSize: moderateScale(12),
    top: verticalScale(2),
    alignSelf: 'flex-end',
    color: 'white'
  },
  buttonForm: {
    top: scale(40),
    height: verticalScale(125),
    width: scale(300),
    justifyContent: 'space-around'
  },
  loginButton: {
    height: verticalScale(45),
    width: scale(300),
    backgroundColor: '#192F4A',
    justifyContent: 'center',
    borderRadius: 20
  },
  loginText: {
    fontSize: moderateScale(15),
    color: 'white',
    alignSelf: 'center'
  },
  fbButton: {
    height: verticalScale(45),
    width: scale(300),
    backgroundColor: '#425BB4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row'
  },
  fbIcon: {
    height: verticalScale(20),
    width: scale(20),
    right: scale(12)
  },
  fbText: {
    fontSize: scale(15),
    color: 'white',
    alignSelf: 'center'
  },
  signUp: {
    top: verticalScale(100),
  },
  signUpText: {
    fontWeight: 'bold',
    fontSize: moderateScale(12),
    alignSelf: 'center',
    color: 'white'
  }
});
