import React from 'react';
import {
  KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const KeyboardAvoidingWrapper = ({ children }) => (
  <KeyboardAvoidingView>
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </ScrollView>
  </KeyboardAvoidingView>
);

KeyboardAvoidingWrapper.defaultProps = {
  children: null,
};

KeyboardAvoidingWrapper.propTypes = {
  children: PropTypes.element,
};

export default KeyboardAvoidingWrapper;
