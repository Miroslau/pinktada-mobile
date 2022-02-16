import { StyleSheet } from 'react-native';

export const PaginateDotStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseDot: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
  },
  activeDot: {
    backgroundColor: 'white',
  },
  inActiveDot: {
    backgroundColor: 'transparent',
  },
});
