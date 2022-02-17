import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, ActivityIndicator,
} from 'react-native';
import { uniqueId } from 'lodash';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import majorCitiesAPI from '../../api/major-cities/majorCitiesAPI';
import popularRoomsAPI from '../../api/popular-rooms/popularRoomsAPI';
import CaruselBar from '../../components/carusel-bar/CaruselBar';
import { HomeScreenStyle } from './HomeScreenStyle';
import useMountedState from '../../hooks/useMountedState';
import { colorVariables } from '../../constants/colorVariables';
import { apartmentSelector } from '../../store/slice/apartmentSlice';

const PREFIX = 'major_cities_';
const SIZE = 'large';

const HomeScreen = ({ navigation }) => {
  const [majorCities, setMajorCities] = useState([]);
  const [popularRooms, setPopularRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const hasMounted = useMountedState();

  const { startDate, endDate } = useSelector(apartmentSelector);

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
      .catch((err) => err.message);
  }, [hasMounted, startDate, endDate]);

  useEffect(() => {
    if (popularRooms.length !== 0 && majorCities.length !== 0) {
      setIsLoading(false);
    }
  }, [popularRooms, majorCities]);

  const openMapPage = (item) => {
    console.log('item: ', item);
    navigation.navigate('Map');
  };

  const openRoomScreen = (item) => {
    console.log('room: ', item);
  };

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
              <View style={HomeScreenStyle.homeContainer}>
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
