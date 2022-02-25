import React, { useCallback, useEffect, useState } from 'react';
import {
  View, Text, ActivityIndicator, FlatList, Image, Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useMountedState from '../../hooks/useMountedState';
import roomAPI from '../../api/room/roomAPI';
import { HistoryScreenStyle } from './HistoryScreenStyle';
import { colorVariables } from '../../constants/colorVariables';
import RoomCard from '../../components/room-card/RoomCard';
import emptyFolder from '../../../assets/icons/empty-folder.png';

const SIZE = 'large';

const HistoryScreen = () => {
  const [visitHistory, setVisitHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const hasMounted = useMountedState();
  const navigation = useNavigation();

  const keyExtractor = useCallback((item) => {
    const { room } = item;
    return room._id;
  });

  useEffect(() => {
    roomAPI.getVisitHistory()
      .then(({ data }) => {
        if (hasMounted()) {
          setVisitHistory(data);
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
              <View style={[HistoryScreenStyle.loaderContainer,
                HistoryScreenStyle.loaderContainer]}
              >
                <ActivityIndicator size={SIZE} color={colorVariables.colorBlue} />
              </View>
            ) : (
              <View style={HistoryScreenStyle.container}>
                <Button title="Back to profile" onPress={() => navigation.goBack()} />
                <View style={HistoryScreenStyle.textContainer}>
                  <Text style={HistoryScreenStyle.text}>Visit History</Text>
                </View>
                {
                  visitHistory.length ? (
                    <FlatList
                      data={visitHistory}
                      renderItem={RoomCard}
                      keyExtractor={keyExtractor}
                    />
                  ) : (
                    <View style={{ alignItems: 'center' }}>
                      <Image source={emptyFolder} resizeMode="cover" style={{ width: 150, height: 150 }} />
                      <Text style={HistoryScreenStyle.text}>Oops! The visit history is empty</Text>
                    </View>
                  )
                }
              </View>
            )
        }
    </>
  );
};

export default HistoryScreen;
