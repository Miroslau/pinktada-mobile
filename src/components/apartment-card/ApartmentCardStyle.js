import { StyleSheet } from 'react-native';
import { colorVariables } from '../../constants/colorVariables';

const apartmentCardStyle = StyleSheet.create({
  container: {
    backgroundColor: colorVariables.colorWhite,
    borderRadius: 4,
    shadowColor: colorVariables.colorBlack,
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  textImage: {
    padding: 0,
  },
  img: {
    width: 100,
    height: 100,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: colorVariables.colorWhite,
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: colorVariables.colorBlueLagoon,
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
});

export default apartmentCardStyle;
