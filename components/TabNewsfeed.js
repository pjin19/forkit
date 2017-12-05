import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';

export default class TabDiscover extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.optionLeft}>
          <Image style={styles.logoLeft} source={require("../assets/newsfeed.png")}/>
        </View>
        <View style={styles.optionMiddle}>
          <Image style={styles.logoMiddle} source={require("../assets/discoverIcon.png")}/>
        </View>
        <View style={styles.optionRight}>
          <Image style={styles.logoRight} source={require("../assets/profile.png")}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(50),
    width: scale(375),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  optionLeft: {
    height: verticalScale(50),
    width: scale(375/3),
    backgroundColor: '#EAEAEA',
    borderColor: '#95989A',
    borderTopWidth: 1,
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  optionMiddle: {
    height: verticalScale(50),
    width: scale(375/3),
    backgroundColor: "#FFFFFF",
    borderColor: '#95989A',
    borderTopWidth: 1,
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  optionRight: {
    height: verticalScale(50),
    width: scale(375/3),
    backgroundColor: "#FFFFFF",
    borderColor: '#95989A',
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoLeft: {
    height: verticalScale(25),
    width: scale(25),
    opacity: 0.52
  },
  logoMiddle: {
    height: verticalScale(30),
    width: scale(30),
    opacity: 0.52
  },
  logoRight: {
    height: verticalScale(25),
    width: scale(25),
    opacity: 0.52
  }
});
