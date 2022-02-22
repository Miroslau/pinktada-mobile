import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import ApartmentCardStyle from './ApartmentCardStyle';
import RatingStar from '../rating-star/RatingStar';
import { colorVariables } from '../../constants/colorVariables';

const ApartmentCard = ({ item }) => (
  <View key={item._id} style={ApartmentCardStyle.card}>
    <Image
      source={{ uri: item.img }}
      style={ApartmentCardStyle.cardImage}
      resizeMode="cover"
    />
    <View style={ApartmentCardStyle.textContent}>
      <Text numberOfLines={1} style={ApartmentCardStyle.cardTitle}>{item.name}</Text>
      <RatingStar rating={item.rating} reviews={item.reviews} />
      <Text numberOfLines={1} style={ApartmentCardStyle.cardDescription}>{item.address}</Text>
      <View style={ApartmentCardStyle.button}>
        <TouchableOpacity style={[ApartmentCardStyle.signIn, {
          borderWidth: 1,
          borderColor: colorVariables.colorPermision,
        }]}
        >
          <Text style={[ApartmentCardStyle.textSign, {
            color: colorVariables.colorPermision,
          }]}
          >
            Order Now
            {' '}
            {item.price}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

ApartmentCard.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default ApartmentCard;
