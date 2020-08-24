import React from 'react';
import {TouchableHighlight, Text} from 'react-native';

import {ButtonProps} from './Button';
import {ARRAY_SYMBOL_CUSTOM_STYLE} from '../index';
import styles from './styles';
import COLORS from '../constants/colors';

const Button = ({highlight, value, onPress}: ButtonProps) => {
  return (
    <TouchableHighlight
      style={[
        styles.inputButton,
        ARRAY_SYMBOL_CUSTOM_STYLE.includes(value + '')
          ? {backgroundColor: COLORS.RED}
          : null,
        highlight ? styles.inputButtonHighlighted : null,
      ]}
      onPress={onPress}>
      <Text style={styles.inputButtonText}>{value}</Text>
    </TouchableHighlight>
  );
};

export default Button;
