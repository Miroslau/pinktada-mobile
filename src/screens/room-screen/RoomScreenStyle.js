import { StyleSheet, Dimensions } from 'react-native';
import { colorVariables } from '../../constants/colorVariables';


const RoomScreenStyle = StyleSheet.create({
  roomImage: {
    // flex: 3,
    marginTop: 100,
    width: 100,
    height: 100,
    // alignSelf: 'center',
  },
  textContent: {
    marginTop: 10,
    marginBottom: 10,
    flex: 2,
    padding: 5,
    fontWeight: '400',
    fontSize: 16
  },
  roomTitle: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    marginTop: 5,
  },
  ratingView: {
    marginLeft: 5,
    marginTop: 5,
  },
  carousel: {
    flexGrow: 0,
    height: 150,
  },
  textSign: {
    marginBottom: 10,
    marginTop: 4,
    marginLeft: 4,
    fontSize: 24,
    fontWeight: 'bold',
  },
  separator: {
    marginLeft: 5,
    marginTop: 15,
    width: '97%',
    marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: 1,
  },
});

export default RoomScreenStyle;
