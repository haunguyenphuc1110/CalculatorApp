import React from 'react';
import {TouchableHighlight, Text} from 'react-native';

import {ButtonProps} from './Button';
import {ARRAY_OPERATOR} from '../index';
import styles from './styles';
import COLORS from '../constants/colors';

const Button = ({value, onPress}: ButtonProps) => {
  return (
    <TouchableHighlight
      style={[
        styles.inputButton,
        ARRAY_OPERATOR.includes(value) ? {backgroundColor: COLORS.RED} : null,
      ]}
      onPress={onPress}>
      <Text style={styles.inputButtonText}>{value}</Text>
    </TouchableHighlight>
  );
};

export default Button;
