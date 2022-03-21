import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, Image, Button,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { apartmentSelector, clearState } from '../../store/slice/apartmentSlice';
import {useDispatch} from "react-redux";
import getRoom from '../../api/get-room-by-id/getRoomById';
import RoomScreenStyle from './RoomScreenStyle';
import RatingStar from '../../components/rating-star/RatingStar';
import { colorVariables } from '../../constants/colorVariables';
import CaruselBarRoom from '../../components/carusel-bar/CarouselBarRooms';
import { userSelector } from '../../store/slice/userSlice';

const Separator = () => (
  <View style={RoomScreenStyle.separator} />
);

const RoomScreen = ({ route }) => {
  const { item } = route.params;
  const { searchParams } = useSelector(apartmentSelector);
  const [roomInfo, setRoomInfo] = useState({});
  const { isBooked } = roomInfo;
  const [data, setData] = useState([]);
  const { startDate, endDate } = searchParams;
  const differenceDatesInTime = new Date(endDate).getTime() - new Date(startDate).getTime();
  const differenceDatesInDays = differenceDatesInTime / (1000 * 3600 * 24);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    token,
  } = useSelector(userSelector);

  const goBack = () => {
    dispatch(clearState());
    navigation.goBack();
  };

  const redirectToPaymentScreen = () => {
    const { price, _id } = roomInfo;
    const parsedPrice = price.slice(1);
    const totalPrice = Math.round(differenceDatesInDays * parsedPrice);
    navigation.navigate('Payment', { _id, totalPrice });
  };

  useEffect(() => {
    getRoom.getRoomById(item._id, startDate, endDate).then((res) => {
      setData(res.data.images);
      setRoomInfo(res.data);
    });
  }, []);

  return (
    <ScrollView>
      <View>
        <Button
          style={RoomScreenStyle.button}
          title="Come back"
          onPress={goBack}
        />
        <Text style={RoomScreenStyle.textSign}>
          {roomInfo.name}
        </Text>

        <Image
          source={{ uri: roomInfo.img }}
          style={RoomScreenStyle.roomImage}
          resizeMode="cover"
        />
        <View style={RoomScreenStyle.ratingView}>
          <RatingStar rating={roomInfo.rating} reviews={roomInfo.reviews} />
        </View>
        <Separator />
        <Text style={RoomScreenStyle.textContent}>
          Price
          {' '}
          {roomInfo.price}
        </Text>
        <Text style={RoomScreenStyle.roomTitle}>
          {' '}
          Location:
          {roomInfo.address}
        </Text>
      </View>
      <View>
        <CaruselBarRoom style={RoomScreenStyle.carousel} data={data} />
      </View>
      {
        token && !isBooked && (
        <View style={RoomScreenStyle.button}>
          <Button onPress={redirectToPaymentScreen} title="BOOK NOW" color={colorVariables.colorPersianIndigo} />
        </View>
        )
      }
      {
          token && isBooked && <Text>This room is booked on this dates</Text>
      }
    </ScrollView>
  );
};

RoomScreen.defaultProps = {
  route: null,
};

RoomScreen.propTypes = {
  route: PropTypes.instanceOf(Object),
};

export default RoomScreen;
