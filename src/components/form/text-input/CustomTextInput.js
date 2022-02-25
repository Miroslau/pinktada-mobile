import React from 'react';
import {
  View, Text, TextInput, Image,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const CustomTextInput = (props) => {
  const {
    label, isIcon, error, icon, customStyle, ...other
  } = props;
  return (
    <View>
      {
          isIcon && (
          <View style={customStyle.leftIcon}>
            <Image resizeMode="contain" source={icon} style={customStyle.icon} />
          </View>
          )
      }
      <Text style={customStyle.styledInputLabel}>{label}</Text>
      <TextInput style={error ? customStyle.errorInput : customStyle.styledTextInput} {...other} />
    </View>
  );
};

CustomTextInput.defaultProps = {
  label: null,
  customStyle: null,
  isIcon: false,
  icon: null,
  error: null,
};

CustomTextInput.propTypes = {
  label: PropTypes.string,
  customStyle: PropTypes.instanceOf(Object),
  isIcon: PropTypes.bool,
  icon: PropTypes.number,
  error: PropTypes.string,
};

export default CustomTextInput;
