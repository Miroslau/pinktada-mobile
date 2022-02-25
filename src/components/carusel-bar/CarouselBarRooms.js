import React, { useState, useRef } from 'react';
import {
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import PaginateDot from '../paginate-dot/PaginateDot';
import { CaruselBarRoomStyle } from './CarouselBarRoomStyle';

const INITIAL_INDEX = 0;
const SCALE_WIDTH = 0.8;
const ACTIVE_OPACITY = 0.3;
const CONTAINER_WIDTH = 0.9;
const { width: windowWidth } = Dimensions.get('window');

const CaruselBarRoom = ({ data, pressItem }) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

  const handleCarouselScrollEnd = (item, index) => {
    setCurrentIndex(index);
  };

  const renderItem = ({ item, index }) => {
    const { imageUrl, publicAddress, image } = item;
    const itemImage = imageUrl || image;

    // eslint-disable-next-line no-shadow
    const pressHandler = (item, index) => {
      carouselRef.current.scrollToIndex(index);
      pressItem(item);
    };

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={CaruselBarRoomStyle.item}
                // eslint-disable-next-line react/jsx-no-bind
        onPress={pressHandler.bind(this, item, index)}
      >
        <ImageBackground source={{ uri: itemImage }} style={CaruselBarRoomStyle.imageBackground} />

      </TouchableOpacity>
    );
  };

  return (
    <View style={CaruselBarRoomStyle.container}>
      <Carousel
        style={CaruselBarRoomStyle.carousel}
        data={data}
        renderItem={renderItem}
        itemWidth={SCALE_WIDTH * windowWidth}
        inActiveOpacity={ACTIVE_OPACITY}
        containerWidth={CONTAINER_WIDTH * windowWidth}
        onScrollEnd={handleCarouselScrollEnd}
        ref={carouselRef}
      />
      <PaginateDot currentIndex={currentIndex} length={data.length} />
    </View>
  );
};

CaruselBarRoom.defaultProps = {
  pressItem: null,
};

CaruselBarRoom.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  pressItem: PropTypes.func,
};

export default CaruselBarRoom;
