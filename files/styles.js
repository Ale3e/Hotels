import React, { Component } from 'react';

import {
  StyleSheet
} from 'react-native';

export function	getStyles() {
    return styles;
}

const styles = StyleSheet.create({
    section: {
      flex: 1,
      backgroundColor:'rgba(255, 255, 255, 1)',
    },
    slideShow: {
      flex: 1,
      backgroundColor:'rgba(255, 255, 255, 1)',
    },
    titleView: {
      flex: 0.5,
      backgroundColor:'rgba(255, 255, 255, 1)',
    },
    container: {
      flex: 1,
      backgroundColor:'rgba(255, 255, 255, 1)',
    },
    image: {
      height: 120,
      width : 180
    },
    imageNotFound: {
      height: 120,
      width : 180
    },
  	card:{
      flex: 1,
      paddingVertical: 5,
      flexDirection: 'row',
      backgroundColor:'rgba(255, 255, 255, 1)',
      borderWidth: 2,
      borderColor: 'rgba(240, 240, 240, 1)',
      shadowColor: 'rgba(0, 0, 0, 1)',
      shadowOffset: {
        width: 1,
        height: 1,     
      },
      shadowOpacity: 0.9,
      shadowRadius: 4,
      elevation: 1,
    },
    stars: {
      flex: 1,
      paddingVertical: 10,
      flexDirection: 'row',
    },
    textTitle:{
      fontWeight: 'bold',
      fontSize: 15,
    },
    pinImage:{
      height: 15,
      width : 15
    },
    filterImage:{
      height: 20,
      width : 20
    },
    mailImage:{
      height: 18,
      width : 25
    },
    phoneImage:{
      height: 20,
      width : 20
    },
    filterText:{
      fontSize: 20,
      padding: 5,
    },
    imageCard:{
      flex: 1,
    },
    hotelInfo:{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    location:{
      flex: 1,
      flexDirection: 'row',
    },    
    filterContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },  
    titleHotel:{
      fontWeight: 'bold',
      fontSize: 23,
    },
    modalContainer: {
		  flex: 1,
		  alignItems: 'center',
		  backgroundColor: 'transparent',
	  },
    spaceAroundModal: {
	  	flex: 1,
	  },
    filterModal: {
      flex: 9,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      paddingHorizontal: 5,
      shadowColor: 'rgba(0, 0, 0, 1)',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
    },
    containerInformation: {
      flex: 1,
      justifyContent: 'center',
    },
    containerRow: {
      flex: 1,
      flexDirection: 'row', 
    },
    containerDetails: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'rgba(255, 255, 255, 1)',
      borderWidth:2,
      borderColor: 'rgba(255, 255, 255, 1)',
      shadowColor: 'rgba(0, 0, 0, 1)',
      shadowOffset: {
        width: 1,
        height: 1,     
      },
      shadowOpacity: 0.9,
      shadowRadius: 4,
      elevation: 1,
    },
    checkTextTitle:{
      flex:0.5,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    checkText:{
      textAlign: 'left',
    },
    contactsTextTitle:{
      fontWeight: 'bold',
      textAlign: 'center',
    },
    contactsText:{
      textAlign: 'center',
    },
    ratingTextTitle:{
      fontWeight: 'bold',
      textAlign: 'center',
    },
    ratingText:{
      textAlign: 'center',
      fontSize: 40,
    },
    contentDetails:{
      flex:1,
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      paddingLeft: 5,
    },
    contentDetailsContacts:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    row:{
      flex: 1,
      flexDirection: 'row',
    }, 
    contactView:{
      flex:0.35,
      flexDirection: 'row', 
    },
    mapView:{
      flex: 1,
      shadowColor: 'rgba(0, 0, 0, 1)',
      shadowOffset: {
        width: 1,
        height: 1,     
      },
      shadowOpacity: 0.9,
      shadowRadius: 4,
      elevation: 1,
    },
    map:{
      position: 'absolute',
      top: 0,
      left: 0,
      right:0,
      bottom:0,
    },
    filterRow:{
      flex:4,
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      borderWidth:1,
      borderColor: 'rgba(240, 240, 240, 1)',
    },
    firstFilterRow:{
      flex:0.8,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderWidth:1,
      borderColor: 'rgba(255, 255, 255, 1)',
    },
    endFilterRow:{
      flex:2,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth:1,
      borderColor: 'rgba(255, 255, 255, 1)',
    },
    filterTitleModal:{
      fontSize: 25,
      textAlign: 'left',
      alignSelf: 'stretch'
    },
    exitButtonModal:{
      fontSize: 25,
    },
    applyText:{
      color: 'rgba(255, 255, 255, 1)',
      fontSize: 20,
      padding: 10,
      paddingHorizontal: 40
    },
    removeText:{
      color: 'rgba(0, 150, 255, 1)',
      fontSize: 20,
      padding: 10,
      paddingHorizontal: 10
    },
    buttonApplyView:{
      position: 'absolute',
      right: 0,
    },
    buttonRemoveView:{
      position: 'absolute',
      left: 0,
    },
    buttonApply:{
      backgroundColor: 'rgba(227, 0, 122,1)',
      borderWidth:1,
      borderColor: 'rgba(255, 255, 255, 1)',
    },
    buttonRemoveFilter:{
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderWidth:1,
      borderColor: 'rgba(0, 150, 255, 1)',
    },
    hotelsView:{
      borderWidth: 1,
      borderColor: 'rgba(240, 240, 240, 1)',
      paddingVertical: 10,
    },
    filterRowText:{
      fontSize: 19,
    },
    starsFilter: {
      flex: 1,
      paddingVertical: 10,
      flexDirection: 'row',
    },
    checkBox:{
      flex: 1, 
      padding: 5,
      width: '100%',
    },
    textInput:{
      flex: 1,
      fontSize: 19,
    }
});