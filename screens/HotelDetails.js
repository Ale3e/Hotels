import React, { Component } from 'react';

import {
  Text,
  View,
  FlatList,
  StyleSheet
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import {
  displayStars
} from '../files/request';

import {
	getStyles,
} from '../files/styles';

import FastImage from 'react-native-fast-image';

import { SliderBox } from "react-native-image-slider-box";

const styles = getStyles();

export default class HotelDetails extends Component {

  static navigationOptions = {
    title: 'Hotel',
  };

  state = {
    hotel: [],
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render () {
    {
      this.state.hotel = this.props.navigation.getParam('item');
    }
    return (
      <View style={styles.container}>
        <View style={styles.slideShow}>
          <SliderBox images={this.state.hotel.images} />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.titleHotel}>{this.state.hotel.name}</Text>
          <View style={styles.stars}>
          {displayStars(this.state.hotel.stars)}
          </View>
          <View style={styles.location}>
            <FastImage style={styles.pinImage} source={require('../imgs/pin.png')}/>
            <Text>{this.state.hotel.location.address}, {this.state.hotel.location.city}</Text>
          </View>
        </View>
        <View style={styles.mapView}>
          <MapView 
          loadingEnabled
          style={styles.map}
          initialRegion={{
            latitude: this.state.hotel.location.latitude,
            longitude: this.state.hotel.location.longitude,
            latitudeDelta:0.004,
            longitudeDelta:0.004,
          }}
          >
          <Marker
            coordinate={{
              latitude: this.state.hotel.location.latitude,
              longitude: this.state.hotel.location.longitude
              }}
            title={this.state.hotel.name}
          />
          </MapView>
        </View>
        <View style={styles.containerInformation}>
          <View style={styles.containerRow}>
            <View style={styles.containerDetails}>
              <Text style={styles.ratingTextTitle}>User Rating</Text>
              <View>
                <Text style={styles.ratingText}>{this.state.hotel.userRating}</Text>
              </View>
            </View>
            <View style={styles.containerDetails}>
              <Text style={styles.contactsTextTitle}>Contacts</Text>
              <View style={styles.contentDetailsContacts}>
                <View style={styles.contactView}>
                  <FastImage style={styles.phoneImage} source={require('../imgs/phone.png')}/>
                  <Text style={styles.contactsText}>{this.state.hotel.contact.phoneNumber}</Text>
                </View>
                <View style={styles.contactView}>
                  <FastImage style={styles.mailImage} source={require('../imgs/mail.png')}/>
                  <Text style={styles.contactsText}>{this.state.hotel.contact.email}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.containerRow}>
            <View style={styles.containerDetails}>
              <Text style={styles.checkTextTitle}>Check In</Text>
                <View style={styles.contentDetails}>
                  <View style={styles.row}>
                    <Text style={styles.checkText}>From:</Text>
                    <Text style={styles.checkText}>{this.state.hotel.checkIn.from}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.checkText}>To:</Text>
                    <Text style={styles.checkText}>{this.state.hotel.checkIn.to}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.containerDetails}>
                <Text style={styles.checkTextTitle}>Check Out</Text>
                <View style={styles.contentDetails}>
                  <View style={styles.row}>
                    <Text style={styles.checkText}>From:</Text>
                    <Text style={styles.checkText}>{this.state.hotel.checkOut.from}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.checkText}>To:</Text>
                    <Text style={styles.checkText}>{this.state.hotel.checkOut.to}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
      </View>

    );
  }
}