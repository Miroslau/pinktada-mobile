import React from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { SearchDropDownStyle } from './SearchDropDownStyle';

const Item = ({ item, pressItem }) => (
  <TouchableOpacity
    style={SearchDropDownStyle.item}
    key={item}
      // eslint-disable-next-line react/prop-types,react/jsx-no-bind
    onPress={pressItem.bind(this, item)}
  >
    <Text style={SearchDropDownStyle.text}>{item}</Text>
  </TouchableOpacity>
);

const SearchDropDown = ({ dataSource, pressItem }) => {
  // eslint-disable-next-line react/prop-types,react/no-unstable-nested-components
  const RenderItem = ({ item }) => (
    <Item item={item} pressItem={pressItem} />
  );

  return (
    <View style={SearchDropDownStyle.container}>
      <FlatList
        data={dataSource}
        renderItem={RenderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

Item.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.any.isRequired,
  pressItem: PropTypes.func.isRequired,
};

SearchDropDown.defaultProps = {
  dataSource: [],
};

SearchDropDown.propTypes = {
  dataSource: PropTypes.instanceOf(Array),
  pressItem: PropTypes.func.isRequired,
};

export default SearchDropDown;
