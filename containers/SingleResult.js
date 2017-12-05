import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import TabDiscover from '../components/TabDiscover.js';

export default class Eats1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <TabDiscover/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/discoverHome.png")}/>
        </View>
        <TabDiscover/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  background: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    height: verticalScale(667-210),
    width: scale(375)
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-210),
    width: scale(375)
  },
  listContainer: {
    flex: 6,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  listItem: {
    borderBottomColor: 'white',
    borderBottomWidth: moderateScale(1),
    width: scale(375),
    flex: 1,
    flexDirection: 'row'
  },
  restaurantPic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  restaurantInfo: {
    flex: 2
  },
  restaurantName: {
    flex: 1,
    borderBottomColor: 'white',
    borderBottomWidth: moderateScale(1),
    justifyContent: 'center'
  },
  restaurantDetails: {
    flex: 3,
    alignItems: 'center',
    flexDirection: 'row'
  },
  restaurantStats: {
    flex: 2
  },
  eatIcon: {
    flex: 1
  },
  restart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gamble: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
