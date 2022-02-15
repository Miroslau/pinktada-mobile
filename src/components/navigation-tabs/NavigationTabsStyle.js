import { StyleSheet } from 'react-native';

const NavigationTabsStyle = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  tabScreen: {
    alignItems: 'center',
  },
  imageStyle: {
    width: 25,
    height: 25,
  },
  imageLogo: {
    width: 30,
    height: 30,
  },
  textStyle: {
    fontSize: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    paddingLeft: 10,
    color: 'white',
    fontSize: 20,
  },
});
const TabBarStyle = {
  height: 60,
  position: 'absolute',
  bottom: 16,
  right: 16,
  left: 16,
  borderRadius: 16,
};

export { NavigationTabsStyle, TabBarStyle };
