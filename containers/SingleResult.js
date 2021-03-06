import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import {MapView} from 'expo';
import StarRating from 'react-native-star-rating';


export default class SingleResult extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/discoverHome.png")}/>
          <View style={styles.nameContainer}>
            <View style={styles.star}>
              <StarRating
                disabled={false}
                maxStars={1}
                rating={0}
                starSize={40}
                starColor={'white'}
                emptyStarColor={'white'}
              />
            </View>
            <View style={styles.name}>
              <Text style={styles.textStyle}>Name of the Restaurant testing again if its long</Text>
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.details}>
              <Image style={styles.restaurantIcon} source={require("../assets/burger.jpg")}/>
              <Text style={styles.textStyle}>123-456-7890</Text>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={4}
                starSize={20}
                starColor={'#00042E'}
                emptyStarColor={'#00042E'}
              />
              <Text style={styles.textStyle}>1,000 reviews on Yelp</Text>
              <Text style={styles.textStyle}>100 miles from you</Text>
            </View>
            <View style={styles.restaurantButtons}>
              <TouchableOpacity style={styles.yelp}>
                <Image style={styles.yelpIcon} source={require("../assets/yelp.jpg")}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.openTable}>
                <Image style={styles.openTableIcon} source={require("../assets/openTable.png")}/>
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
              <Text style={styles.buttonStyle}>Restart Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.back} onPress={Actions.listresults}>
              <Text style={styles.buttonStyle}>Back to Results</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.goContainer}>
            <TouchableOpacity style={styles.fork} onPress={Actions.resultlightbox}>
              <Text style={styles.buttonStyle}>Fork It</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    borderBottomColor: "#00042E",
    borderBottomWidth: moderateScale(2),
    width: scale(375),
    flexDirection: 'row'
  },
  detailsContainer: {
    flex: 3,
    borderBottomColor: "#00042E",
    borderBottomWidth: moderateScale(2),
    width: scale(375),
    flexDirection: 'row'
  },
  mapContainer: {
    flex: 3,
    borderBottomColor: "#00042E",
    borderBottomWidth: moderateScale(2),
    width: scale(375),
    justifyContent: 'center',
    alignItems: 'center'
  },
  backContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  goContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    flex: 1,
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
    margin: moderateScale(5),
  },
  openTable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: moderateScale(5),
    position: 'relative'
  },
  restart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00042E',
    borderRadius: 20,
    margin: moderateScale(5)
  },
  back: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00042E',
    borderRadius: 20,
    margin: moderateScale(5)
  },
  fork: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00042E',
    borderRadius: 20,
    margin: moderateScale(5),
    width: scale(375/2)
  },
  textStyle: {
    fontSize: moderateScale(18),
    fontFamily: 'Futura',
    color: 'white'
  },
  buttonStyle: {
    fontSize: moderateScale(20),
    fontFamily: 'Futura',
    color: 'white'
  },
  restaurantIcon: {
    height: verticalScale(80),
    width: scale(80),
    borderRadius: 40,
    opacity: 0.7
  },
  yelpIcon: {
    height: verticalScale(55),
    width: scale(140),
    borderRadius: 20
  },
  openTableIcon: {
    height: verticalScale(55),
    width: scale(140),
    borderRadius: 20
  }
});
