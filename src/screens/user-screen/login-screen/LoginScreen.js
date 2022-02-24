import React from 'react';
import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { UserScreenStyle } from '../UserScreenStyle';
import logo from '../../../../assets/icons/logo.png';
import CustomTextInput from '../../../components/form/text-input/CustomTextInput';
import { colorVariables } from '../../../constants/colorVariables';
import email from '../../../../assets/icons/mail.png';
import padlock from '../../../../assets/icons/padlock.png';
import useUserForm from '../../../hooks/useUserForm';
import { validateUserErrors } from '../../../mixins/validateUserErrors';

const LoginScreen = ({ signInUser, errorMessage }) => {
  const {
    handleChange, handleSubmit, user, errors,
  } = useUserForm(signInUser, validateUserErrors);

  return (
    <View style={UserScreenStyle.container}>
      <View style={UserScreenStyle.innerContainer}>
        <View style={UserScreenStyle.logoTitle}>
          <Text style={UserScreenStyle.pageTitle}>Welcome to Pinktada</Text>
          <Image
            source={logo}
            resizeMode="cover"
            style={UserScreenStyle.pageLogo}
          />
        </View>
        <Text style={UserScreenStyle.subTitle}>Account Login</Text>
        <View style={UserScreenStyle.styledFormArea}>
          <CustomTextInput
            label="EmailAddress"
            placeholder="example@gmail.com"
            onChangeText={(text) => handleChange(text, 'email')}
            placeholderTextColor={colorVariables.colorGrayChateau}
            customStyle={UserScreenStyle}
            keyboardType="email-address"
            value={user.email}
            error={errors.email}
            isIcon
            icon={email}
          />
          <CustomTextInput
            label="Password"
            placeholder="* * * * * * * * *"
            onChangeText={(text) => handleChange(text, 'password')}
            placeholderTextColor={colorVariables.colorGrayChateau}
            customStyle={UserScreenStyle}
            secureTextEntry
            value={user.password}
            error={errors.password}
            isIcon
            icon={padlock}
          />
          <Text style={UserScreenStyle.msgBox}>{errorMessage}</Text>
          <TouchableOpacity
            style={UserScreenStyle.styledButton}
            onPress={handleSubmit}
          >
            <Text style={UserScreenStyle.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

LoginScreen.propTypes = {
  signInUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default LoginScreen;
