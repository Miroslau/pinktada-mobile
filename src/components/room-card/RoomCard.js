import React from 'react';
import { View, Text, Image } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import ApartmentCardStyle from '../apartment-card/ApartmentCardStyle';
import RatingStar from '../rating-star/RatingStar';

const RoomCard = ({ item }) => {
  const { room } = item;

  return (
    <View style={ApartmentCardStyle.card}>
      <Image
        source={{ uri: room.img }}
        style={ApartmentCardStyle.cardImage}
        resizeMode="cover"
      />
      <View style={ApartmentCardStyle.textContent}>
        <Text numberOfLines={1} style={ApartmentCardStyle.cardTitle}>{room.name}</Text>
        <RatingStar rating={room.rating} reviews={room.reviews} />
        <Text numberOfLines={1} style={ApartmentCardStyle.cardDescription}>{room.address}</Text>
        <Text numberOfLines={1} style={ApartmentCardStyle.cardDescription}>
          {room.bathroomLabel}
        </Text>
        <Text numberOfLines={1} style={ApartmentCardStyle.cardDescription}>
          {room.bedroomLabel}
        </Text>
      </View>
    </View>
  );
};

RoomCard.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default RoomCard;
