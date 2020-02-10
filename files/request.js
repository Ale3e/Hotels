import React, { Component } from 'react';

import {
  StyleSheet
} from 'react-native';

import FastImage from 'react-native-fast-image';

export function	getHotel() {
    return (
        fetch("https://services.lastminute.com/mobile/stubs/hotels")
        .then(response => response.json()) 
        .then(responseJson => {
            return responseJson.hotels;
        })
        .catch(error => {
        console.error(error);
        })
    )
};

export function displayStars(stars) {
    let starsComponents = [];
    for (i = 0; i < stars; i++) {
      starsComponents.push(<FastImage key={i} style={styles.starImage} source={require('../imgs/star.png')}/>);
    };
    return starsComponents;
}

const styles = StyleSheet.create({
    starImage: {
      resizeMode: 'stretch',
      height: 20,
      width : 20
    },
    stars: {
      flex: 1,
      flexDirection: 'row',
    },
});