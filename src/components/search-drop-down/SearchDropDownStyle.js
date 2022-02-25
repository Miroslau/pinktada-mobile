import { StyleSheet } from 'react-native';

export const SearchDropDownStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '10%',
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: 5,
    zIndex: 10,
    backgroundColor: 'gray',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },

  item: {
    marginHorizontal: '10%',
    backgroundColor: 'white',
    marginVertical: 5,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
  },

  text: {
    color: 'black',
    paddingHorizontal: 10,
  },
});