import { StyleSheet } from 'react-native';
import { colorVariables } from '../../constants/colorVariables';

export const UserScreenStyle = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  loaderHorizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: colorVariables.colorWhite,
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  logoTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pageLogo: {
    width: 50,
    height: 50,
  },
  pageTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colorVariables.colorPurpleHeart,
    padding: 10,
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 20,
    letterSpacing: 1,
    fontWeight: 'bold',
    color: colorVariables.colorEbonyClay,
  },
  styledFormArea: {
    width: '90%',
  },
  styledTextInput: {
    backgroundColor: colorVariables.colorAthensGray,
    padding: 15,
    paddingLeft: 55,
    paddingRight: 55,
    borderRadius: 5,
    fontSize: 16,
    height: 60,
    marginVertical: 3,
    marginBottom: 10,
    color: colorVariables.colorEbonyClay,
  },
  errorInput: {
    backgroundColor: 'transparent',
    borderColor: colorVariables.colorFlamingo,
    borderWidth: 1,
    padding: 15,
    paddingLeft: 55,
    paddingRight: 55,
    borderRadius: 5,
    fontSize: 16,
    height: 60,
    marginVertical: 3,
    marginBottom: 10,
    color: colorVariables.colorFlamingo,
  },
  styledInputLabel: {
    color: colorVariables.colorEbonyClay,
    fontSize: 13,
    textAlign: 'left',
  },
  leftIcon: {
    left: 15,
    top: 38,
    position: 'absolute',
    zIndex: 1,
  },
  icon: {
    width: 30,
    height: 30,
  },
  // Touchable
  rightIcon: {
    left: 15,
    top: 38,
    position: 'absolute',
    zIndex: 1,
  },
  // Touchable
  styledButton: {
    padding: 15,
    backgroundColor: colorVariables.colorPurpleHeart,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5,
    height: 60,
  },
  buttonText: {
    color: colorVariables.colorWhite,
    fontSize: 16,
  },
  msgBox: {
    textAlign: 'center',
    fontSize: 13,
    color: colorVariables.colorFlamingo,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: colorVariables.colorEbonyClay,
    marginVertical: 10,
  },

  visitHistoryBox: {
    margin: 15,
    height: 150,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  subText: {
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: 'bold',
    color: colorVariables.colorFlamingo,
  },
});
