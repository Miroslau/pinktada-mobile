import React from 'react';
import RNDateTimePicker from '@react-native-community/datetimepicker';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const DatePicker = (props) => {
  const {
    value, mode, display, onChange, maximumDate, minimumDate, ...other
  } = props;

  return (
    <RNDateTimePicker
      value={value}
      mode={mode}
      display={display}
      // eslint-disable-next-line react/jsx-no-bind
      onChange={onChange}
      maximumDate={maximumDate}
      minimumDate={minimumDate}
      {...other}
    />
  );
};

DatePicker.defaultProps = {
  display: 'default',
  mode: 'date',
  onChange: () => {},
  maximumDate: null,
  minimumDate: null,
};

DatePicker.propTypes = {
  display: PropTypes.string,
  mode: PropTypes.string,
  value: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func,
  maximumDate: PropTypes.instanceOf(Date),
  minimumDate: PropTypes.instanceOf(Date),
};

export default DatePicker;
