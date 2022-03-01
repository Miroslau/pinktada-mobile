import { StyleSheet } from 'react-native';

export const ButtonIconStyle = StyleSheet.create({
  buttonContainer: {
    elevation: 8,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  imageStyle: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '300',
    alignSelf: 'center',
  },
});
