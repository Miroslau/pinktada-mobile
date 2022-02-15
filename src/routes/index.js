import HomeScreen from '../screens/home-screen/HomeScreen';
import MapScreen from '../screens/map-screen/MapScreen';

const publicRoutes = [
  {
    id: 'home',
    name: 'Home',
    title: 'HOME',
    Component: HomeScreen,
    icon: require('../../assets/icons/home.png'),
  },
  {
    id: 'map',
    name: 'Map',
    title: 'MAP',
    Component: MapScreen,
    icon: require('../../assets/icons/map.png'),
  },
];

export default publicRoutes;
