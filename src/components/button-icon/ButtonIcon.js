import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { ButtonIconStyle } from './ButtonIconStyle';
import { colorVariables } from '../../constants/colorVariables';

const { colorAmaranth } = colorVariables;

const ButtonIcon = ({ title, icon, pressHandler }) => (
  <TouchableOpacity
    style={ButtonIconStyle.buttonContainer}
    onPress={pressHandler}
  >
    <Image
      source={icon}
      resizeMode="contain"
      style={{
        ...ButtonIconStyle.imageStyle,
        tintColor: colorAmaranth,
        marginRight: 7,
      }}
    />
    <Text style={ButtonIconStyle.text}>{title}</Text>
  </TouchableOpacity>
);

ButtonIcon.defaultProps = {
  title: null,
  icon: null,
};

ButtonIcon.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.number,
  pressHandler: PropTypes.func.isRequired,
};

export default ButtonIcon;