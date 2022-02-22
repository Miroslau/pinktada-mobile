import React from 'react';
import { View, Text, Image } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import ApartmentCardStyle from './ApartmentCardStyle';

const ApartmentCard = ({ item }) => (
  <View key={item._id} style={ApartmentCardStyle.card}>
    <Image
      source={{ uri: item.img }}
      style={ApartmentCardStyle.cardImage}
      resizeMode="cover"
    />
    <View style={ApartmentCardStyle.textContent}>
      <Text numberOfLines={1} style={ApartmentCardStyle.cardTitle}>{item.name}</Text>
      <Text numberOfLines={1} style={ApartmentCardStyle.cardDescription}>{item.address}</Text>
    </View>
  </View>
);

ApartmentCard.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default ApartmentCard;
