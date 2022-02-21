import React from 'react';
import { View, Text, Image } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import ApartmentCardStyle from './ApartmentCardStyle';

const ApartmentCard = ({ item }) => (
  <View>
    <View style={ApartmentCardStyle.container}>
      <Text style={ApartmentCardStyle.textImage}>
        <Image
          style={ApartmentCardStyle.img}
          resizeMode="cover"
          source={{
            uri: item.img,
          }}
        />
      </Text>
    </View>
    <View style={ApartmentCardStyle.arrowBorder} />
    <View style={ApartmentCardStyle.arrow} />
  </View>
);

ApartmentCard.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default ApartmentCard;
