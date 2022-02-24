import { StyleSheet } from 'react-native';

export const HistoryScreenStyle = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  loaderHorizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    padding: 10,
    alignItems: 'center',
  },
  textContainer: {
    margin: 15,
    height: 50,
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
