import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';

export default class Tabbar extends React.Component {
  constructor() {
    super()
    this.state = {
      leftColor: "#FFFFFF",
      middleColor: '#EAEAEA',
      rightColor: "#FFFFFF",
    }
  }

  selectLeft(fn) {
    this.setState({
      leftColor: '#EAEAEA',
      middleColor: "#FFFFFF",
      rightColor: "#FFFFFF",
    })
    fn()
  }

  selectMiddle(fn) {
    this.setState({
      leftColor: "#FFFFFF",
      middleColor: '#EAEAEA',
      rightColor: "#FFFFFF",
    })
    fn()
  }

  selectRight(fn) {
    this.setState({
      leftColor: "#FFFFFF",
      middleColor: "#FFFFFF",
      rightColor: '#EAEAEA',
    })
    fn()
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{
          height: verticalScale(50),
          width: scale(375/3),
          backgroundColor: this.state.leftColor,
          borderColor: '#95989A',
          borderTopWidth: 1,
          borderRightWidth: 1,
          alignItems: 'center',
          justifyContent: 'center'
          }}
          onPress={() => this.selectLeft(Actions.resultlightbox)}>
          <Image style={styles.logoLeft} source={require("../assets/newsfeed.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={{
          height: verticalScale(50),
          width: scale(375/3),
          backgroundColor: this.state.middleColor,
          borderColor: '#95989A',
          borderTopWidth: 1,
          borderRightWidth: 1,
          alignItems: 'center',
          justifyContent: 'center'
          }}
          onPress={() => this.selectMiddle(Actions.discover)}>
          <Image style={styles.logoMiddle} source={require("../assets/discoverIcon.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={{
          height: verticalScale(50),
          width: scale(375/3),
          backgroundColor: this.state.rightColor,
          borderColor: '#95989A',
          borderTopWidth: 1,
          alignItems: 'center',
          justifyContent: 'center'
          }}
          onPress={() => this.selectRight(Actions.profile)}>
          <Image style={styles.logoRight} source={require("../assets/profile.png")}/>
        </TouchableOpacity>
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
