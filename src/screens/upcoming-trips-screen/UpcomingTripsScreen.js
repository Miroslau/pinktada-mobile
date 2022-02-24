import React, { useCallback, useEffect, useState } from 'react';
import {
  View, Text, ActivityIndicator, FlatList, Image, Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useMountedState from '../../hooks/useMountedState';
import roomAPI from '../../api/room/roomAPI';
import { colorVariables } from '../../constants/colorVariables';
import RoomCard from '../../components/room-card/RoomCard';
import emptyFolder from '../../../assets/icons/empty-folder.png';
import { UpcomingTripsScreenStyle } from './UpcomingTripsScreenStyle';

const SIZE = 'large';

const UpcomingTripsScreen = () => {
  const [futureVisits, setFutureVisits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const hasMounted = useMountedState();
  const navigation = useNavigation();

  const keyExtractor = useCallback((item) => {
    const { room } = item;
    return room._id;
  });

  useEffect(() => {
    roomAPI.futureRooms()
      .then(({ data }) => {
        if (hasMounted()) {
          setFutureVisits(data);
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [hasMounted]);

  return (
  // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {
        isLoading ? (
          <View style={[UpcomingTripsScreenStyle.loaderContainer,
            UpcomingTripsScreenStyle.loaderHorizontal]}
          >
            <ActivityIndicator size={SIZE} color={colorVariables.colorBlue} />
          </View>
        ) : (
          <View style={UpcomingTripsScreenStyle.container}>
            <Button title="Back to profile" onPress={() => navigation.goBack()} />
            <View style={UpcomingTripsScreenStyle.textContainer}>
              <Text style={UpcomingTripsScreenStyle.text}>Upcoming Trips</Text>
            </View>
            {
              futureVisits.length ? (
                <FlatList
                  data={futureVisits}
                  renderItem={RoomCard}
                  keyExtractor={keyExtractor}
                />
              ) : (
                <View style={{ alignItems: 'center' }}>
                  <Image source={emptyFolder} resizeMode="cover" style={{ width: 150, height: 150 }} />
                  <Text style={UpcomingTripsScreenStyle.text}>
                    Oops! The upcoming trips is empty
                  </Text>
                </View>
              )
            }
          </View>
        )
      }
    </>
  );
};

export default UpcomingTripsScreen;
