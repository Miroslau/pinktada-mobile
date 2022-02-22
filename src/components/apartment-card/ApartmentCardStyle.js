import { StyleSheet, Dimensions } from 'react-native';
import { colorVariables } from '../../constants/colorVariables';

const { width } = Dimensions.get('window');

const apartmentCardStyle = StyleSheet.create({
  card: {
    elevation: 2,
    backgroundColor: colorVariables.colorWhite,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: colorVariables.colorBlack,
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: 150,
    width: width * 0.5,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: colorVariables.colorTundora,
  },
});

export default apartmentCardStyle;
