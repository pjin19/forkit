import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import TabDiscover from '../components/TabDiscover.js';
import {MapView} from 'expo';

export default class SingleResult extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/discoverHome.png")}/>
          <View style={styles.nameContainer}>
            <View style={styles.star}>
              <TouchableOpacity><Image style={{height: verticalScale(40), width: scale(40)}}source={require("../assets/soccer.png")}/></TouchableOpacity>
            </View>
            <View style={styles.name}>
              <Text style={{fontSize: moderateScale(20)}}>Name of the Restaurant</Text>
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.details}>
              <Text>123-456-7890</Text>
              <Text>Star Star Star Star Star</Text>
              <Text>1,000 reviews on Yelp</Text>
              <Text>100 miles from you</Text>
            </View>
            <View style={styles.restaurantButtons}>
              <TouchableOpacity style={styles.yelp}>
                <Text>Yelp</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.openTable}>
                <Text>Open Table</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.mapContainer}>
            <MapView
              style={{ width: scale(300), height: verticalScale(150) }}
              region={{
                latitude: 37.771728,
                longitude: -122.409421,
                latitudeDelta: .05,
                longitudeDelta: .05,

              }}
            >
              <MapView.Marker
                coordinate={{
                  latitude: 37.771728,
                  longitude: -122.409421
                }}
                pinColor={'#008000'}
                />
              <MapView.Marker
                coordinate={{
                  latitude: 37.760602,
                  longitude: -122.419421
                }}
                />
            </MapView>
          </View>
          <View style={styles.backContainer}>
            <TouchableOpacity style={styles.restart} onPress={Actions.discover}>
              <Text>Restart Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.back} onPress={Actions.listresults}>
              <Text>Back to Results</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.goContainer}>
            <TouchableOpacity style={styles.fork}>
              <Text>Fork It</Text>
            </TouchableOpacity>
          </View>
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
    height: verticalScale(667-70-50),
    width: scale(375)
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-70-50),
    width: scale(375)
  },
  nameContainer: {
    flex: 1,
    borderBottomColor: 'white',
    borderBottomWidth: moderateScale(1),
    width: scale(375),
    flexDirection: 'row'
  },
  detailsContainer: {
    flex: 3,
    borderBottomColor: 'white',
    borderBottomWidth: moderateScale(1),
    width: scale(375),
    flexDirection: 'row'
  },
  mapContainer: {
    flex: 3,
    borderBottomColor: 'white',
    borderBottomWidth: moderateScale(1),
    width: scale(375),
    justifyContent: 'center',
    alignItems: 'center'
  },
  backContainer: {
    flex: 1,
    borderBottomColor: 'white',
    borderBottomWidth: moderateScale(1),
    width: scale(375),
    flexDirection: 'row'
  },
  goContainer: {
    flex: 1,
    borderBottomColor: 'white',
    borderBottomWidth: moderateScale(1),
    width: scale(375)
  },
  star: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    flex: 4,
    justifyContent: 'center'
  },
  details: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  restaurantButtons: {
    flex: 1
  },
  yelp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: moderateScale(1),
    borderRadius: 20,
    margin: moderateScale(5)
  },
  openTable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: moderateScale(1),
    borderRadius: 20,
    margin: moderateScale(5)
  },
  restart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: moderateScale(1),
    borderRadius: 20,
    margin: moderateScale(5)
  },
  back: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: moderateScale(1),
    borderRadius: 20,
    margin: moderateScale(5)
  },
  fork: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: moderateScale(1),
    borderRadius: 20,
    margin: moderateScale(5)
  }
});
