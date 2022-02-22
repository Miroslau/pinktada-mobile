import React, { useEffect, useState, useRef } from 'react';
import {
  PROVIDER_GOOGLE, Marker,
} from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import {
  Dimensions,
  View,
  TextInput,
  Animated,
  Platform,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import pointMarker from '../../../assets/icons/pointMarker.png';
import MapComponentStyle from './MapComponentStyle';
import ApartmentCard from '../apartment-card/ApartmentCard';

const { width } = Dimensions.get('window');

const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const MapComponent = ({ apartments }) => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0121,
    longitudeDelta: 0.0121,
  });

  let mapIndex = 0;
  const mapAnimation = new Animated.Value(0);

  const interpolations = apartments.map((apartment, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      ((index + 1) * CARD_WIDTH),
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: 'clamp',
    });

    return { scale };
  });

  const mapRef = useRef(null);
  const scrollView = useRef(null);

  const animateToRegion = () => {
    mapRef.current.animateToRegion(region, 1000);
  };

  const getYourCurrentLocation = () => {
    if (apartments.length) {
      const { lat, lon } = apartments[0].location;
      setRegion((prevState) => ({
        ...prevState,
        latitude: lat,
        longitude: lon,
      }));
    }
  };

  const onMarkerPress = (e) => {
    const markerId = e._targetInst.return.key;

    let x = (markerId * CARD_WIDTH) + (markerId * 20);
    if (Platform.OS === 'ios') {
      // eslint-disable-next-line no-unused-vars
      x -= SPACING_FOR_CARD_INSET;
    }

    scrollView.current.scrollTo({
      x,
      y: 0,
      animated: true,
    });
  };

  useEffect(() => {
    getYourCurrentLocation();
  }, [apartments]);

  useEffect(() => {
    animateToRegion();
  }, [region]);

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if (index >= apartments.length) {
        index = apartments.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      // eslint-disable-next-line no-use-before-define
      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const { location } = apartments[index];
          mapRef.current.animateToRegion({
            latitude: location.lat,
            longitude: location.lon,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
          }, 350);
        }
      }, 10);
    });
  });

  return (
    <View style={MapComponentStyle.container}>
      <MapView
        style={MapComponentStyle.container}
        loadingEnabled
        initialRegion={region}
        ref={mapRef}
        minZoomLevel={5}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
      >
        {
          apartments.map((item, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            return (
              <Marker
                key={item._id}
                coordinate={{
                  latitude: item.location.lat,
                  longitude: item.location.lon,
                }}
                onPress={onMarkerPress}
              >
                <Animated.View style={[MapComponentStyle.markerWrap]}>
                  <Animated.Image
                    source={pointMarker}
                    style={[MapComponentStyle.marker, scaleStyle]}
                    resizeMode="cover"
                  />
                </Animated.View>
              </Marker>
            );
          })
        }
      </MapView>
      <View style={MapComponentStyle.searchBox}>
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
        ref={scrollView}
        showsHorizontalScrollIndicator={false}
        style={MapComponentStyle.scrollView}
        pagingEnabled
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
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
            <ApartmentCard key={item._id} item={item} />
          ))
        }
      </Animated.ScrollView>
    </View>
  );
};

MapComponent.propTypes = {
  apartments: PropTypes.instanceOf(Array).isRequired,
};

export default MapComponent;
