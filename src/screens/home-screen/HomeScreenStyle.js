import { StyleSheet } from 'react-native';

export const HomeScreenStyle = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  loaderHorizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  homeContainer: {
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  textContainer: {
    margin: 15,
    height: 50,
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  block: {
    margin: 10,
  },
});
