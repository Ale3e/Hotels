import React, { Component } from 'react';

import {
  Modal, 
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight, 
  Image,
  TextInput,
  ScrollView
} from 'react-native';

import CheckBox from 'react-native-check-box'

import {
	getHotel,
  displayStars
} from '../files/request';

import {
	getStyles,
} from '../files/styles';

import FastImage from 'react-native-fast-image';

const styles = getStyles();

export default class Hotels extends Component {

  state = {
    isLoading: true,
    modalVisible: false,
    hotels: [],
    filtratedHotels: [],
    filtersName: '',
    isCheckedStar5: false,
    isCheckedStar4: false,
    isCheckedSta3: false,
    isCheckedSta2: false,
    isCheckedSta1: false,
    isCheckedNormal: false,
    isCheckedGood: false,
    isCheckedExcellent: false,
  };

  static navigationOptions = {
    title: 'Hotel',
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  applyFilters() {
    this.state.filtratedHotels = [];
    let filterStar = [];
    let filterRating = [];
    let filterName = [];
    let filterStarOn = false;
    let filterRatingOn = false;
    let filterNameOn = false;

    //Check which filter is on
    if (this.state.isCheckedStar5 || this.state.isCheckedStar4 || this.state.isCheckedStar3 || this.state.isCheckedStar2 || this.state.isCheckedStar1) {
      filterStarOn = true;
    }

    if (this.state.isCheckedNormal || this.state.isCheckedGood || this.state.isCheckedExcellent) {
      filterRatingOn = true;
    }

    if (this.state.filtersName != '') {
      filterNameOn = true;
    }

    // Star filter
    for (let i in this.state.hotels){
      if (this.state.isCheckedStar5 && (this.state.hotels[i].stars == 5)){
        filterStar.push(this.state.hotels[i]);
      }
      if (this.state.isCheckedStar4 && (this.state.hotels[i].stars == 4)){
        filterStar.push(this.state.hotels[i]);
      }
      if (this.state.isCheckedStar3 && (this.state.hotels[i].stars == 3)){
        filterStar.push(this.state.hotels[i]);
      }
      if (this.state.isCheckedStar2 && (this.state.hotels[i].stars == 2)){
        filterStar.push(this.state.hotels[i]);
      }
      if (this.state.isCheckedStar1 && (this.state.hotels[i].stars == 1)){
        filterStar.push(this.state.hotels[i]);
      }
    }

    // User Rating Filter
    for (let i in this.state.hotels){
      if (this.state.isCheckedNormal && (this.state.hotels[i].userRating < 7)){
        filterRating.push(this.state.hotels[i]);
      }
      if (this.state.isCheckedGood && (this.state.hotels[i].userRating >= 7 && this.state.hotels[i].userRating < 8.5)){
        filterRating.push(this.state.hotels[i]);
      }
      if (this.state.isCheckedExcellent && (this.state.hotels[i].userRating >= 8.5)){
        filterRating.push(this.state.hotels[i]);
      }
    }

    // Name Filter
    for (let i in this.state.hotels){
      if (this.state.hotels[i].name.includes(this.state.filtersName)){
        filterName.push(this.state.hotels[i]);
      }
    }

    //Union of filter
    if (filterStarOn && filterRatingOn && filterNameOn) { 
      let firstFilter = filterStar.filter(x => filterRating.includes(x));
      this.setState({
        filtratedHotels: firstFilter.filter(x => filterName.includes(x)),
      })
    } else if (filterStarOn && filterRatingOn && !filterNameOn) { 
      this.setState({
        filtratedHotels: filterStar.filter(x => filterRating.includes(x)),
      })
    } else if (filterStarOn && !filterRatingOn && filterNameOn) { 
      this.setState({
        filtratedHotels: filterStar.filter(x => filterName.includes(x)),
      })
    } else if (filterStarOn && !filterRatingOn && !filterNameOn) { 
      this.setState({
        filtratedHotels: filterStar,
      })
    } else if (!filterStarOn && filterRatingOn && filterNameOn) { 
      this.setState({
        filtratedHotels: filterName.filter(x => filterRating.includes(x)),
      })
    } else if (!filterStarOn && filterRatingOn && !filterNameOn) { 
      this.setState({
        filtratedHotels: filterRating,
      })
    } else if (!filterStarOn && !filterRatingOn && filterNameOn) { 
      this.setState({
        filtratedHotels: filterName,
      })
    } else if (!filterStarOn && !filterRatingOn && !filterNameOn) { 
      this.setState({
        filtratedHotels: this.state.hotels,
      })
    }
  }

  removeFilters() {
    this.setState({
      isCheckedStar5: false,
      isCheckedStar4: false,
      isCheckedStar3: false,
      isCheckedStar2: false,
      isCheckedStar1: false,
      isCheckedNormal: false,
      isCheckedGood: false,
      isCheckedExcellent: false,
      filtersName: '',
    })
  }

  genModal () {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.spaceAroundModal}></View>
            <View style={styles.filterModal}>
                <View style={styles.firstFilterRow}>
                    <Text style={styles.filterTitleModal}>Filters</Text>
                    <TouchableHighlight
                    onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                    }}>
                        <Text style={styles.exitButtonModal}>X</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.filterRow}>
                    <Text style={styles.filterRowText}>Star:</Text>
                    <CheckBox
                      style={styles.checkBox}
                      onClick={()=>{
                        this.setState({
                            isCheckedStar5:!this.state.isCheckedStar5
                        })
                      }}
                      isChecked={this.state.isCheckedStar5}
                      leftTextView={
                        <View style={styles.starsFilter}>
                        {displayStars(5)}
                        </View>
                      }
                    />
                    <CheckBox
                      style={styles.checkBox}
                      onClick={()=>{
                        this.setState({
                            isCheckedStar4:!this.state.isCheckedStar4
                        })
                      }}
                      isChecked={this.state.isCheckedStar4}
                      leftTextView={
                        <View style={styles.starsFilter}>
                        {displayStars(4)}
                        </View>
                      }
                    />
                    <CheckBox
                      style={styles.checkBox}
                      onClick={()=>{
                        this.setState({
                            isCheckedStar3:!this.state.isCheckedStar3
                        })
                      }}
                      isChecked={this.state.isCheckedStar3}
                      leftTextView={
                        <View style={styles.starsFilter}>
                        {displayStars(3)}
                        </View>
                      }
                    />
                    <CheckBox
                      style={styles.checkBox}
                      onClick={()=>{
                        this.setState({
                            isCheckedStar2:!this.state.isCheckedStar2
                        })
                      }}
                      isChecked={this.state.isCheckedStar2}
                      leftTextView={
                        <View style={styles.starsFilter}>
                        {displayStars(2)}
                        </View>
                      }
                    />
                    <CheckBox
                      style={styles.checkBox}
                      onClick={()=>{
                        this.setState({
                            isCheckedStar1:!this.state.isCheckedStar1
                        })
                      }}
                      isChecked={this.state.isCheckedStar1}
                      leftTextView={
                        <View style={styles.starsFilter}>
                        {displayStars(1)}
                        </View>
                      }
                    />
                </View>
                <View style={styles.filterRow}>
                    <Text style={styles.filterRowText}>User Rating:</Text>
                    <CheckBox
                      style={styles.checkBox}
                      leftTextStyle={styles.filterRowText}
                      onClick={()=>{
                        this.setState({
                            isCheckedNormal:!this.state.isCheckedNormal
                        })
                      }}
                      isChecked={this.state.isCheckedNormal}
                      leftText={"Normal (< 7)"}
                    />
                    <CheckBox
                      style={styles.checkBox}
                      leftTextStyle={styles.filterRowText}
                      onClick={()=>{
                        this.setState({
                            isCheckedGood:!this.state.isCheckedGood
                        })
                      }}
                      isChecked={this.state.isCheckedGood}
                      leftText={"Good (>= 7 and < 8.5)"}
                    />
                    <CheckBox
                      style={styles.checkBox}
                      leftTextStyle={styles.filterRowText}
                      onClick={()=>{
                        this.setState({
                            isCheckedExcellent:!this.state.isCheckedExcellent
                        })
                      }}
                      isChecked={this.state.isCheckedExcellent}
                      leftText={"Excellent (>= 8.5)"}
                    />
                </View>
                <View style={styles.filterRow}>
                    <Text style={styles.filterRowText}>Name of Hotel:</Text>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Write name of Hotel"
                      onChangeText={data => this.setState({filtersName: data})}
                      value={this.state.filtersName}
                    />
                </View>
                <View style={styles.endFilterRow}>
                    <View style={styles.buttonRemoveView}>
                        <TouchableHighlight
                        style={styles.buttonRemoveFilter}
                        onPress={() => {
                          this.removeFilters();
                        }}
                        >
                            <Text style={styles.removeText}>Remove Filter</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.buttonApplyView}>
                        <TouchableHighlight
                        style={styles.buttonApply}
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                          this.applyFilters();
                        }}
                        >
                            <Text style={styles.applyText}>Apply</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <View style={styles.filterContainer}>
            <FastImage style={styles.filterImage} source={require('../imgs/filter.png')}/>
            <Text style={styles.filterText}>Filters</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  hotelsResult(){
    if (this.state.filtratedHotels.length > 0){
      return (
        <FlatList
        bounces={false}
        data={this.state.filtratedHotels}
        keyExtractor = {(item, index) => index.toString()}
        renderItem = {({item, index}) => 
          <TouchableOpacity key={index} activeOpacity={1} onPress={() => {
            const {navigate} = this.props.navigation;
            navigate('HotelDetails', {item: item});}}
          >
            <View key={index} style={styles.card}>
              <View>
                <Image
                style={styles.image}
                source={{uri: item.images[0]}}
                />
              </View>
              <View style={styles.hotelInfo}>
                <Text style={styles.textTitle}>{item.name}</Text>
                <View style={styles.stars}>
                  {displayStars(item.stars)}
                </View>
                <View style={styles.location}>
                  <FastImage style={styles.pinImage} source={require('../imgs/pin.png')}/>
                  <Text> {item.location.city}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        } 
        />
      );
    } else {
      return (
        <ScrollView bounces={false}>
          <View style={styles.card}> 
            <View style={styles.imageCard}>
              <Image
              style={styles.imageNotFound}
              source={require('../imgs/noResultFound.png')}
              />
            </View>
            <View style={styles.hotelInfo}>
              <Text style={styles.textTitle}>No Result Found</Text>
            </View>
          </View>      
        </ScrollView>  
      );
    }
  }

  componentDidMount () {
    getHotel().then(data => {
      this.setState({
        isLoading: true,
        hotels: data,
        filtratedHotels: data,
      })
    });
  }

  componentDidUpdate () {
		if (this.state.isLoading){
			getHotel().then(data => {
        this.state.isLoading = false;
        this.state.hotels = data;
      });  
		}
	}

  render () {
      return (
        <View style={styles.container}>
          <View>{this.genModal()}</View>
          <View style={styles.hotelsView}>
            {this.hotelsResult()}
          </View>
        </View>
      );
    }
}