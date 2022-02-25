import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  View, TextInput, Text, Image, TouchableOpacity, Button
} from 'react-native';
import { debounce } from 'lodash';
import moment from 'moment';
import { setDate, setDateParams } from '../../store/slice/apartmentSlice';
import { SearchSettingsStyle } from './SearchSettingsStyle';
import SearchDropDown from '../search-drop-down/SearchDropDown';
import searchLocationApi from '../../api/search-location/searchLocationApi';
import calendar from '../../../assets/icons/calendar.png';
import searchIcon from '../../../assets/icons/search.png';
import DatePicker from '../date-picker/DatePicker';

const START_DATE = 'Start Date';
const END_DATE = 'End Date';

const MAX_ROOM = 8;
const MIN_ROOM = 0;

const MIN_DATE = new Date();

const SearchSettings = () => {
  const dispatch = useDispatch();
  const [isSearching, setIsSearching] = useState(false);
  const [isOpenStartDay, setOpenStartDay] = useState(false);
  const [isOpenEndDay, setOpenEndDay] = useState(false);
  const [locations, setLocations] = useState([]);
  const [textValue, setTextValue] = useState('');
  const [startDateValue, setStartDateValue] = useState(new Date());
  const [roomCounter, setRoomCounter] = useState(0);
  // eslint-disable-next-line max-len
  const [endDateValue, setEndDateValue] = useState(new Date(new Date().setDate(new Date().getDate() + 1)));

  const setStartDay = (value) => {
    const { type, nativeEvent } = value;
    const { timestamp } = nativeEvent;
    if (type === 'set') {
      setStartDateValue(timestamp);
    }
    setOpenStartDay(false);
    dispatch(setDate({ startDate: timestamp, endDate: endDateValue }));
    dispatch(setDateParams({ startDate: timestamp, endDate: endDateValue }));
  };

  const setEndDay = (value) => {
    const { type, nativeEvent } = value;
    const { timestamp } = nativeEvent;
    if (type === 'set') {
      setEndDateValue(timestamp);
    }
    setOpenEndDay(false);
    dispatch(setDate({ startDate: startDateValue, endDate: timestamp }));
    dispatch(setDateParams({ startDate: startDateValue, endDate: timestamp }));
  };

  const getLocations = (searchVal) => {
    searchLocationApi.getLocations(searchVal)
      .then(({ data }) => {
        setLocations(data);
      })
      .catch((err) => console.error(err.message));
  };

  const handler = useCallback(debounce((searchVal) => {
    getLocations(searchVal);
  }, 300), []);

  const onSearch = (text) => {
    setTextValue(text);
    if (text) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }

    handler(text);
  };

  const choseLocation = (item) => {
    setIsSearching(false);
    setTextValue(item);
  };

  const addRoom = () => {
    setRoomCounter(roomCounter + 1);
  };

  const removeRoom = () => {
    setRoomCounter(roomCounter - 1);
  };


  return (
    <View style={SearchSettingsStyle.modalView}>
      <View style={SearchSettingsStyle.modalContainer}>
        <View style={SearchSettingsStyle.line} />
        <View style={SearchSettingsStyle.formContainer}>
          <TextInput
            style={SearchSettingsStyle.input}
            onChangeText={onSearch}
            placeholder="Location"
            value={textValue}
          />
          {
              isSearching && (
              <SearchDropDown
                pressItem={choseLocation}
                dataSource={locations}
              />
              )
          }
          <TouchableOpacity
            style={SearchSettingsStyle.dateStyle}
            // eslint-disable-next-line react/jsx-no-bind
            onPress={() => setOpenStartDay(true)}
          >
            <Image style={SearchSettingsStyle.icon} resizeMode="contain" source={calendar} />
            <Text style={SearchSettingsStyle.text}>{`${START_DATE}: `}</Text>
            <Text style={SearchSettingsStyle.text}>{moment(startDateValue).format('YYYY-MM-DD')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={SearchSettingsStyle.dateStyle}
              // eslint-disable-next-line react/jsx-no-bind
            onPress={() => setOpenEndDay(true)}
          >
            <Image style={SearchSettingsStyle.icon} resizeMode="contain" source={calendar} />
            <Text style={SearchSettingsStyle.text}>{`${END_DATE}: `}</Text>
            <Text style={SearchSettingsStyle.text}>{moment(endDateValue).format('YYYY-MM-DD')}</Text>
          </TouchableOpacity>
          <View style={SearchSettingsStyle.bedroomCount}>
            <TouchableOpacity
              style={roomCounter === MAX_ROOM ? SearchSettingsStyle.bedroomCountButtonDisabled : SearchSettingsStyle.bedroomCountButton}
              onPress={addRoom}
              disabled={roomCounter === MAX_ROOM}>
              <Text style={SearchSettingsStyle.bedroomCountButtonText}>+</Text>
            </TouchableOpacity>
            {roomCounter ? <Text>Bedroom count: {roomCounter}</Text> : <Text>Bedroom count  </Text>}
            <TouchableOpacity
              style={roomCounter === MIN_ROOM ? SearchSettingsStyle.bedroomCountButtonDisabled : SearchSettingsStyle.bedroomCountButton}
              onPress={removeRoom}
              disabled={roomCounter === MIN_ROOM}>
              <Text style={SearchSettingsStyle.bedroomCountButtonText}>-</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={SearchSettingsStyle.searchIconButton}>
              <Image style={SearchSettingsStyle.searchIcon} resizeMode='contain' source={searchIcon}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {
          isOpenStartDay && (
          <DatePicker
            value={startDateValue}
            minimumDate={MIN_DATE}
            onChange={setStartDay}
            mode="date"
            display="calendar"
          />
          )
      }
      {
        isOpenEndDay && (
        <DatePicker
          value={endDateValue}
          minimumDate={MIN_DATE}
          onChange={setEndDay}
          mode="date"
          display="calendar"
        />
        )
      }
    </View>
  );
};

export default SearchSettings;