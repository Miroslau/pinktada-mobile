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
    marginTop: 40,
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
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  chipReset: {
    position: 'absolute',
    top: 80,
    left: (width / 2) - 100,
    paddingHorizontal: 10,
    height: 50,
  },
  button: {
    alignItems: 'center',
    marginVertical: 15,
  },
  chipsItem: {
    flexDirection: 'row',
    backgroundColor: colorVariables.colorWhite,
    borderRadius: 20,
    padding: 2,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginTop: 12,
    height: 25,
    shadowColor: colorVariables.colorSilver,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});

export default mapComponentStyle;
