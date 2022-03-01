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
    backgroundColor: '#ebeff2',
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
    color: colorVariables.colorBigStone,
    fontSize: 20,
    fontWeight: '500',
    margin: 7,
  },

  formContainer: {
    flex: 1,
    borderColor: 'black',
    alignItems: 'center',
    width: Dimensions.get('window').width * 1,
  },

  dateStyle: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 280,
  },

  input: {
    width: Dimensions.get('window').width * 0.7,
    borderColor: colorVariables.colorGray,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
  },

  icon: {
    width: 35,
    height: 35,
  },

  bedroomCount: {
    width: Dimensions.get('window').width * 0.7,
    borderColor: colorVariables.colorGray,
    borderRadius: 20,
    marginTop: 15,
    padding: 10,
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: Dimensions.get('window').height * 0.1,
  },

  bedroomCountButton: {
    width: Dimensions.get('window').width * 0.085,
    borderColor: colorVariables.colorBlack,
    borderRadius: 35,
    alignItems: 'center',
    backgroundColor: "#eeeeee",
    shadowColor: "#000",
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 10,
  },

  bedroomCountButtonDisabled: {
    width: Dimensions.get('window').width * 0.085,
    borderColor: colorVariables.colorBlack,
    borderRadius: 35,
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    shadowColor: "#000",
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 2,
  },


  bedroomCountButtonText: {
    fontSize: 25,
  },


  searchIconButton: {
    marginTop: 50,
    padding: 15,
    borderColor: colorVariables.colorBlack,
    borderRadius: 40,
    backgroundColor: '#fff2cc',
    shadowColor: "#000",
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 15,
  },

  searchIcon: {
    width: 35,
    height: 35,
  },

  button: {
    alignItems: 'center',
    marginVertical: 15,
  },
});