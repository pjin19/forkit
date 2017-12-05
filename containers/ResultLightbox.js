import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';

export default class ResultLightbox extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.transportContainer}>
          <TouchableOpacity style={styles.button}>
            <Text>GOOG</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>UBER</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>LYFT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.closeContainer}>
          <TouchableOpacity onPress={Actions.pop}><Text style={{fontSize: 20}}>Close</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: verticalScale(490),
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    display: 'flex'
  },
  transportContainer: {
    flex: 2,
    flexDirection: 'row'
  },
  closeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: moderateScale(1),
    borderRadius: 20,
    margin: moderateScale(5)
  }
});
