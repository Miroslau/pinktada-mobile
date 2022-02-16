import React from 'react';
import { View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { PaginateDotStyle } from './PaginateDotStyle';

const genCircleStyle = (size) => {
  if (!size) {
    return {};
  }
  return { width: size, height: size, borderRadius: size / 2 };
};

function Dot({
  isActive, color, activeDotSize, inActiveDotSize, dotSeparator,
}) {
  const processedActiveDotStyle = [
    PaginateDotStyle.activeDot,
    {
      backgroundColor: color,
      borderColor: color,
      marginHorizontal: dotSeparator / 2,
      ...genCircleStyle(activeDotSize),
    },
  ];
  const processedInActiveDotStyle = [
    PaginateDotStyle.inActiveDot,
    {
      backgroundColor: 'transparent',
      borderColor: color,
      marginHorizontal: dotSeparator / 2,
      ...genCircleStyle(inActiveDotSize),
    },
  ];
  return (
    <View
      style={[
        PaginateDotStyle.baseDot,
        isActive ? processedActiveDotStyle : processedInActiveDotStyle,
      ]}
    />
  );
}

const PaginateDot = ({
  style,
  length,
  currentIndex,
  color,
  activeDotSize,
  inActiveDotSize,
  dotSeparator,
}) => {
  function renderItem(item, index) {
    return (
      <Dot
        key={index}
        isActive={index === currentIndex}
        color={color}
        activeDotSize={activeDotSize}
        inActiveDotSize={inActiveDotSize}
        dotSeparator={dotSeparator}
      />
    );
  }
  return (
    <View style={[PaginateDotStyle.container, style]}>
      {Array(length).fill(0).map(renderItem)}
    </View>
  );
};

Dot.defaultProps = {
  isActive: false,
  color: null,
  activeDotSize: null,
  inActiveDotSize: null,
  dotSeparator: null,
};

PaginateDot.defaultProps = {
  style: null,
  length: null,
  currentIndex: 0,
  color: 'red',
  activeDotSize: 14,
  inActiveDotSize: 10,
  dotSeparator: 10,
};

Dot.propTypes = {
  isActive: PropTypes.bool,
  color: PropTypes.string,
  activeDotSize: PropTypes.number,
  inActiveDotSize: PropTypes.number,
  dotSeparator: PropTypes.number,
};

PaginateDot.propTypes = {
  style: PropTypes.instanceOf(Object),
  length: PropTypes.number,
  currentIndex: PropTypes.number,
  color: PropTypes.string,
  activeDotSize: PropTypes.number,
  inActiveDotSize: PropTypes.number,
  dotSeparator: PropTypes.number,
};

export default PaginateDot;
