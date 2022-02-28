import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, ActivityIndicator, Modal,
} from 'react-native';
import { uniqueId } from 'lodash';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import GestureRecognizer from 'react-native-swipe-gestures';
import majorCitiesAPI from '../../api/major-cities/majorCitiesAPI';
import popularRoomsAPI from '../../api/popular-rooms/popularRoomsAPI';
import CaruselBar from '../../components/carusel-bar/CaruselBar';
import { HomeScreenStyle } from './HomeScreenStyle';
import useMountedState from '../../hooks/useMountedState';
import { colorVariables } from '../../constants/colorVariables';
import ButtonIcon from '../../components/button-icon/ButtonIcon';
import iconSearch from '../../../assets/icons/search.png';
import SearchSettings from '../../components/search-settings/SearchSettings';
import { setPublicAddress, apartmentSelector, clearState } from '../../store/slice/apartmentSlice';


const PREFIX = 'major_cities_';
const SIZE = 'large';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [majorCities, setMajorCities] = useState([]);
  const [popularRooms, setPopularRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const hasMounted = useMountedState();
  

  const { startDate, endDate } = useSelector(apartmentSelector);

  useEffect(() => {
    dispatch(clearState());
  }, []);

  useEffect(() => {
    majorCitiesAPI.getMajorCities()
      .then(({ data }) => {
        if (hasMounted()) {
          const cities = data.map((city) => {
            city._id = uniqueId(PREFIX);
            return city;
          });
          setMajorCities(cities);
        }
      })
      .catch((err) => err.message);
  }, [hasMounted]);

  useEffect(() => {
    popularRoomsAPI.popularRooms(startDate, endDate)
      .then(({ data }) => {
        if (hasMounted()) {
          setPopularRooms(data);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [hasMounted, startDate, endDate]);

  useEffect(() => {
    if (popularRooms.length !== 0 && majorCities.length !== 0) {
      setIsLoading(false);
    }
  }, [popularRooms, majorCities]);

  const openMapPage = (city) => {
    dispatch(setPublicAddress(city));
    navigation.navigate('Map');
  };

  const openRoomScreen = (item) => {
    navigation.navigate('Room', { item });
  };

  const toogleModalSearch = () => setModalVisible(!modalVisible);


  return (
  // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {
        isLoading ? (
          <View style={[HomeScreenStyle.loaderContainer, HomeScreenStyle.loaderHorizontal]}>
            <ActivityIndicator size={SIZE} color={colorVariables.colorBlue} />
          </View>
        )
          : (
            <ScrollView>
              <GestureRecognizer style={{ flex: 1 }} onSwipeDown={toogleModalSearch}>
                <Modal
                  animationType="slide"
                  visible={modalVisible}
                  transparent
                >
                  <SearchSettings data={majorCities}/>
                </Modal>
              </GestureRecognizer>
              <View style={HomeScreenStyle.homeContainer}>
                <View style={HomeScreenStyle.buttonBlock}>
                  <ButtonIcon pressHandler={toogleModalSearch} 
                              icon={iconSearch} title="Where are you going?" 
                              />
                </View>
                <View style={HomeScreenStyle.block}>
                  <View style={HomeScreenStyle.textContainer}>
                    <Text style={HomeScreenStyle.text}>Top Rated</Text>
                  </View>
                  <View>
                    <CaruselBar pressItem={openRoomScreen} data={popularRooms} />
                  </View>
                </View>
                <View style={HomeScreenStyle.block}>
                  <View style={HomeScreenStyle.textContainer}>
                    <Text style={HomeScreenStyle.text}>Find city</Text>
                  </View>
                  <View>
                    <CaruselBar pressItem={openMapPage} data={majorCities} />
                  </View>
                </View>
              </View>
            </ScrollView>
          )
      }
    </>
  );
};

HomeScreen.defaultProps = {
  navigation: null,
};

HomeScreen.propTypes = {
  navigation: PropTypes.instanceOf(Object),
};

export default HomeScreen;
