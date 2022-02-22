import { StyleSheet, Dimensions } from 'react-native';
import { colorVariables } from '../../constants/colorVariables';

const { width } = Dimensions.get('window');

const mapComponentStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  searchBox: {
    position: 'absolute',
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: colorVariables.colorWhite,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: colorVariables.colorSilver,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
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
});

export default mapComponentStyle;
