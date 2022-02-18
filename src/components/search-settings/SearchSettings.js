import React, { useState, useCallback } from 'react';
import {
  View, TextInput, Text, Image,
} from 'react-native';
import { debounce } from 'lodash';
import moment from 'moment';
import { SearchSettingsStyle } from './SearchSettingsStyle';
import SearchDropDown from '../search-drop-down/SearchDropDown';
import searchLocationApi from '../../api/search-location/searchLocationApi';
import calendar from '../../../assets/icons/calendar.png';

const SearchSettings = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [locations, setLocations] = useState([]);
  const [textValue, setTextValue] = useState('');
  const [startDateValue, setStartDateValue] = useState(moment().format('YYYY-MM-DD'));

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

  return (
    <View style={SearchSettingsStyle.modalView}>
      <View style={SearchSettingsStyle.modalContainer}>
        <View style={SearchSettingsStyle.line} />
        <View style={SearchSettingsStyle.locationSearch}>
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
        </View>
        <View style={SearchSettingsStyle.locationSearch}>
          <Image style={SearchSettingsStyle.icon} resizeMode="contain" source={calendar} />
          <Text>
            Start Date:
            {startDateValue}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SearchSettings;
