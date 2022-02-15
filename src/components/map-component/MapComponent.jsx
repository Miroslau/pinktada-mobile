import React, { useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const MapComponent = () => {
  const [region] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0121,
    longitudeDelta: 0.0121,
  });
  return (
    <MapView
        // eslint-disable-next-line no-use-before-define
      style={styles.map}
      loadingEnabled
      provider={PROVIDER_GOOGLE}
      region={region}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    height,
  },
});

export default MapComponent;
