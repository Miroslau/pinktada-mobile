import React, { useEffect, useState, useRef } from 'react';
import {
  PROVIDER_GOOGLE, Marker,
} from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import {
  StyleSheet,
  Dimensions,
  View,
  TextInput,
  Animated,
  Image,
  Text,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import pointMarker from '../../../assets/icons/pointMarker.png';

const { width } = Dimensions.get('window');

const mapAnimation = new Animated.Value(0);

const MapComponent = ({ apartments }) => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0121,
    longitudeDelta: 0.0121,
  });

  const mapRef = useRef(null);

  const animateToRegion = () => {
    mapRef.current.animateToRegion(region, 1000);
  };

  const getYourCurrentLocation = () => {
    if (apartments.length) {
      const { lat, lon } = apartments[0].location;
      console.log(lat, lon);
      setRegion((prevState) => ({
        ...prevState,
        latitude: lat,
        longitude: lon,
      }));
    }
  };

  useEffect(() => {
    getYourCurrentLocation();
  }, [apartments]);

  useEffect(() => {
    animateToRegion();
  }, [region]);

  return (
    <View style={styles.container}>
      <MapView
           // eslint-disable-next-line no-use-before-define
        style={styles.container}
        loadingEnabled
        initialRegion={region}
        ref={mapRef}
        minZoomLevel={5}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
      >
        {
          apartments.map((item) => (
            <Marker
              key={item._id}
              coordinate={{
                latitude: item.location.lat,
                longitude: item.location.lon,
              }}
            >
              {/* eslint-disable-next-line no-use-before-define */}
              <Animated.View style={[styles.markerWrap]}>
                {/* eslint-disable-next-line no-use-before-define */}
                <Animated.Image source={pointMarker} style={[styles.marker]} />
              </Animated.View>
            </Marker>
          ))
        }
      </MapView>
      {/* eslint-disable-next-line no-use-before-define */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search here"
          placeholderTextColor="#000"
          autoCapitalize="none"
          style={{ flex: 1, padding: 0 }}
        />
      </View>
      <Animated.ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        pagingEnabled
        snapToInterval={(width * 0.5) + 20}
        snapToAlignment="center"
        contentInset={{
          top: 0,
          left: width * 0.1 - 10,
          bottom: 0,
          right: width * 0.1 - 10,
        }}
        contentContainerStyle={{
          paddingHorizontal: 0,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                },
              },
            },
          ],
          { useNativeDriver: true },
        )}
      >
        {
          apartments.map((item) => (
            <View key={item._id} style={styles.card}>
              <Image
                source={{ uri: item.img }}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardTitle}>{item.name}</Text>
              </View>
            </View>
          ))
        }
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  searchBox: {
    position: 'absolute',
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  card: {
    elevation: 2,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: 150,
    width: width * 0.5,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

MapComponent.propTypes = {
  apartments: PropTypes.instanceOf(Array).isRequired,
};

export default MapComponent;
