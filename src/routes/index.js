import MapScreen from '../screens/map-screen/MapScreen';
import UserScreen from '../screens/user-screen/UserScreen';
import MainScreen from '../screens/main-screen/MainScreen';

const publicRoutes = [
  {
    id: 'main',
    name: 'Main',
    title: 'HOME',
    Component: MainScreen,
    icon: require('../../assets/icons/home.png'),
  },
  {
    id: 'map',
    name: 'Map',
    title: 'MAP',
    Component: MapScreen,
    icon: require('../../assets/icons/map.png'),
  },
  {
    id: 'user',
    name: 'User',
    title: 'USER',
    Component: UserScreen,
    icon: require('../../assets/icons/user.png'),
  },
];

export default publicRoutes;
