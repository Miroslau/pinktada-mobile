import React from 'react';
import { View, Image, Text } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import RatingStarStyle from './RatingStarStyle';

const RatingStar = ({ rating, reviews }) => {
  const stars = [];

  // eslint-disable-next-line no-plusplus
  for (let index = 1; index <= 5; index++) {
    let src = require('../../../assets/icons/star.png');

    if (index > rating) {
      // eslint-disable-next-line no-unused-vars
      src = require('../../../assets/icons/starOutline.png');
    }

    stars.push((<Image key={index} style={RatingStarStyle.star} source={src} resizeMode="contain" />));
  }

  return (
    <View style={RatingStarStyle.container}>
      { stars }
      <Text style={RatingStarStyle.text}>
        (
        {reviews}
        )
      </Text>
    </View>
  );
};

RatingStar.defaultProps = {
  rating: null,
  reviews: null,
};

RatingStar.propTypes = {
  rating: PropTypes.number,
  reviews: PropTypes.number,
};

export default RatingStar;
