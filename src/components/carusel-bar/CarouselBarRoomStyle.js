import { StyleSheet } from 'react-native';

export const CaruselBarRoomStyle = StyleSheet.create({
  container: {
    height: 150,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  carousel: {
    aspectRatio: 1.5,
    flexGrow: 0,
    marginBottom: 20,
  },
  item: {
    width: 180,
    backgroundColor: 'white',
    flex: 1,

    elevation: 3,
  },
  imageBackground: {
    flex: 2,
    backgroundColor: '#EBEBEB',

  },
  rightTextContainer: {
    marginLeft: 'auto',
    marginRight: -2,
    backgroundColor: 'rgba(49, 49, 51,0.5)',
    padding: 3,
    marginTop: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  rightText: { color: 'white' },
  lowerContainer: {
    flex: 1,
    margin: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentText: {
    marginTop: 10,
    fontSize: 12,
  },
});
