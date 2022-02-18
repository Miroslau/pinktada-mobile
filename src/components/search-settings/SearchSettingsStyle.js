import { StyleSheet, Dimensions } from 'react-native';
import { colorVariables } from '../../constants/colorVariables';

export const SearchSettingsStyle = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: colorVariables.colorGray,
  },
  modalContainer: {
    bottom: 0,
    top: Dimensions.get('window').height * 0.1,
    left: 0,
    right: 0,
    position: 'absolute',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: Dimensions.get('window').height * 0.9,
    maxHeight: Dimensions.get('window').height * 0.9,
  },

  line: {
    borderRadius: 5,
    margin: 15,
    height: 10,
    width: 100,
    justifyContent: 'center',
    backgroundColor: colorVariables.colorGray,
  },

  text: {
    alignSelf: 'center',
    color: colorVariables.colorBigStone,
    fontSize: 20,
    fontWeight: '500',
    margin: 15,
  },

  locationSearch: {
    flex: 1,
    alignItems: 'center',
  },

  input: {
    width: Dimensions.get('window').width * 0.7,
    borderColor: colorVariables.colorGray,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },

  icon: {
    width: 25,
    height: 25,
  },
});
