import HomeScreen from '../screens/home-screen/HomeScreen';
import MapScreen from '../screens/map-screen/MapScreen';
import UserScreen from '../screens/user-screen/UserScreen';
import RoomScreen from '../screens/room-screen/RoomScreen';

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
  {
    id: 'user',
    name: 'User',
    title: 'USER',
    Component: UserScreen,
    icon: require('../../assets/icons/user.png'),
  },
  {
    id: 'room',
    name: 'Room',
    title: 'ROOM',
    Component: RoomScreen,
  },
];

export default publicRoutes;
