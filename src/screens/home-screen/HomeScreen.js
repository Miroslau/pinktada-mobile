import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView,
} from 'react-native';
import { uniqueId } from 'lodash';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import majorCitiesAPI from '../../api/major-cities/majorCitiesAPI';
import CaruselBar from '../../components/carusel-bar/CaruselBar';
import { HomeScreenStyle } from './HomeScreenStyle';
import useMountedState from '../../hooks/useMountedState';

const PREFIX = 'major_cities_';

const HomeScreen = ({ navigation }) => {
  const [majorCities, setMajorCities] = useState([]);
  const hasMounted = useMountedState();

  useEffect(() => {
    majorCitiesAPI.getMajorCities()
      .then(({ data }) => {
        if (hasMounted()) {
          const cities = data.map((city) => {
            city.id = uniqueId(PREFIX);
            return city;
          });
          setMajorCities(cities);
        }
      })
      .catch((err) => err.message);
  }, [hasMounted]);

  const openMapPage = (item) => {
    console.log('item: ', item);
    navigation.navigate('Map');
  };

  return (
    <ScrollView>
      <View style={HomeScreenStyle.homeContainer}>
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
  );
};

HomeScreen.defaultProps = {
  navigation: null,
};

HomeScreen.propTypes = {
  navigation: PropTypes.instanceOf(Object),
};

export default HomeScreen;
