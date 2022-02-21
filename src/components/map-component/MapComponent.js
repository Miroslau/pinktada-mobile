import React, { useEffect, useState, useRef } from 'react';
import {
  PROVIDER_GOOGLE, Marker,
} from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import {
  StyleSheet, Dimensions, View, TextInput,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import pointMarker from '../../../assets/icons/pointMarker.png';

const { height } = Dimensions.get('window');

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
    <View>
      <MapView
           // eslint-disable-next-line no-use-before-define
        style={styles.map}
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
              image={pointMarker}
            />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height,
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
});

MapComponent.propTypes = {
  apartments: PropTypes.instanceOf(Array).isRequired,
};

export default MapComponent;
