import { StyleSheet } from 'react-native';
import { colorVariables } from '../../constants/colorVariables';

const ratingStarStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    width: 15,
    height: 15,
  },
  text: {
    fontSize: 12,
    marginLeft: 5,
    color: colorVariables.colorTundora,
  },
});

export default ratingStarStyle;
