import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, Image, Button,
} from 'react-native';
import { useSelector } from 'react-redux';
import { apartmentSelector } from '../../store/slice/apartmentSlice';
import getRoom from '../../api/get-room-by-id/getRoomById';
import RoomScreenStyle from './RoomScreenStyle';
import RatingStar from '../../components/rating-star/RatingStar';
import { colorVariables } from '../../constants/colorVariables';
import CaruselBarRoom from '../../components/carusel-bar/CarouselBarRooms';

const Separator = () => (
  <View style={RoomScreenStyle.separator} />
);

const RoomScreen = ({ route }) => {
  const { item } = route.params;
  const { searchParams } = useSelector(apartmentSelector);
  const [roomInfo, setRoomInfo] = useState({});
  const { startDate, endDate } = searchParams;

  useEffect(() => {
    getRoom.getRoomById(item._id, startDate, endDate).then((res) => {
      // console.log(pic);
      console.log(res.data);
      setRoomInfo(res.data);
    });
  }, []);

  return (
    <ScrollView>
      <View>
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
      {/* <View> */}
      {/*  <CaruselBarRoom style={RoomScreenStyle.carousel} data={roomInfo.images} /> */}
      {/* </View> */}
      <View style={RoomScreenStyle.button}>
        <Button title="BOOK NOW" color={colorVariables.colorPersianIndigo} />
      </View>
    </ScrollView>
  );
};

export default RoomScreen;
