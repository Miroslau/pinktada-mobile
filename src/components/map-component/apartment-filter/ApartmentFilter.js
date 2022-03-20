import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  View, Text, TouchableOpacity, Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { setParams } from '../../../store/slice/apartmentSlice';
import ApartmentFilterStyle from './ApartmentFilterStyle';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const MIN_BEDROOMS = 0;
const MAX_BEDROOMS = 8;

const MIN_PRICE = 10;
const MAX_PRICE = 1000;
const STEP = 10;

const ApartmentFilter = ({openClosed, apartmentFilter}) => {
  const [filtersParams, setFilterParams] = useState({
    priceRange: [10,1000],
    bedrooms: 0,
  });
  
  const rangeChange = (newValue) => {
    // eslint-disable-next-line max-len
    setFilterParams((prevState) => ({
      ...prevState,
      priceRange: newValue,
      isMinInput: false,
      isMaxInput: false,
    }));
  }; 


  // eslint-disable-next-line max-len
  const addRoom = () => setFilterParams((prevState) => ({
      ...prevState,
      bedrooms: prevState.bedrooms + 1,
    }));

  const removeRoom = () => setFilterParams((prevState) => ({
    ...prevState,
    bedrooms: prevState.bedrooms - 1,
  }));

  const clickSearchHandler = () => {
    apartmentFilter(filtersParams);
  };

  const clearState = () => {
    setFilterParams({
      priceRange: [10, 1000],
      bedrooms: 0,
    });
    apartmentFilter(filtersParams);
  };

  return (
    <View style={ApartmentFilterStyle.modalView}>
      <View style={ApartmentFilterStyle.modalContainer}>
        <View style={ApartmentFilterStyle.line} />
        <View style={ApartmentFilterStyle.formContainer}>
          <View style={ApartmentFilterStyle.priceContainer}>
            <Text style={{fontSize: 16, fontWeight: '700'}}> Price Range </Text>
            <View style={ApartmentFilterStyle.price}>
              <Text>min: {filtersParams.priceRange[0]}</Text>
              <Text>max: {filtersParams.priceRange[1]}</Text>
            </View>
            <MultiSlider
              values={[filtersParams.priceRange[0], filtersParams.priceRange[1]]}
              min={MIN_PRICE}
              max={MAX_PRICE}
              step={STEP}
              minMarkerOverlapDistance={STEP}
              allowOverlap={false}
              onValuesChange={rangeChange}
            />
          </View>
          <View style={ApartmentFilterStyle.bedroomCount}>
            <TouchableOpacity
              style={filtersParams.bedrooms === MAX_BEDROOMS ? ApartmentFilterStyle.bedroomCountButtonDisabled
                : ApartmentFilterStyle.bedroomCountButton}
              onPress={addRoom}
              disabled={filtersParams.bedrooms === MAX_BEDROOMS}
            >
              <Text style={ApartmentFilterStyle.bedroomCountButtonText}>+</Text>
            </TouchableOpacity>
            {filtersParams.bedrooms ? (
              <Text>
                Bedroom count: 
                {filtersParams.bedrooms}
              </Text>
            ) : <Text>Bedroom count  </Text>}
            <TouchableOpacity
              style={filtersParams.bedrooms === MIN_BEDROOMS ? ApartmentFilterStyle.bedroomCountButtonDisabled
                : ApartmentFilterStyle.bedroomCountButton}
              onPress={removeRoom}
              disabled={filtersParams.bedrooms === MIN_BEDROOMS}
            >
              <Text style={ApartmentFilterStyle.bedroomCountButtonText}>-</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={ApartmentFilterStyle.searchIconButton}
              onPress={clickSearchHandler}
              >
                <Text>APPLY</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={ApartmentFilterStyle.searchIconButton}
              onPress={clearState}
              >
                <Text>CLEAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ApartmentFilter;
