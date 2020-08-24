import React, {useState} from 'react';
import {Text, View} from 'react-native';

import Button from './components/Button.component';
import styles from './styles';

export const buttonTitles = [
  ['CLEAR', 'DEL'],
  ['1', '2', '3', '/'],
  ['4', '5', '6', '*'],
  ['7', '8', '9', '-'],
  ['0', '.', '=', '+'],
];

export const ARRAY_OPERATOR = ['/', '+', '-', '*'];

interface CalculatorValues {
  displayValue: string;
  operator: string | null;
  canAddDot: boolean;
}

const initialCalculatorValues: CalculatorValues = {
  displayValue: '0',
  operator: null,
  canAddDot: true,
};

const Home = () => {
  const [calculatorValues, setCalculatorValues] = useState(
    initialCalculatorValues,
  );

  const setValues = (
    displayValue: string,
    operator: string | null,
    canAddDot: boolean,
  ) => {
    setCalculatorValues({
      ...calculatorValues,
      displayValue,
      operator,
      canAddDot,
    });
  };

  const handlePress = (input: string) => {
    const {displayValue, operator, canAddDot} = calculatorValues;
    const lastString = displayValue.slice(-1);
    const deletedString = displayValue.slice(0, displayValue.length - 1);

    switch (input) {
      case '/':
      case '*':
      case '+':
      case '-':
      case '.':
        if (displayValue === '0') {
          return;
        }

        if (input === '.' && !canAddDot) {
          return;
        }

        if (input === '.') {
          setValues(displayValue + input, input, false);
          return;
        }

        if (operator) {
          setValues(
            displayValue.slice(0, displayValue.length - 1) + input,
            input,
            true,
          );
          return;
        }
        setValues(displayValue + input, input, true);

        break;
      case '=':
        if (ARRAY_OPERATOR.includes(lastString)) {
          return;
        }

        // eslint-disable-next-line no-eval
        const result = eval(displayValue).toString();
        setValues(result, null, true);

        break;
      case 'CLEAR':
        setValues('0', null, true);
        break;

      case 'DEL':
        setValues(
          deletedString.length > 0 ? deletedString : '0',
          ARRAY_OPERATOR.includes(lastString) ? lastString : null,
          true,
        );
        break;

      default:
        if (displayValue === '0') {
          setValues(input, null, canAddDot);
          return;
        }

        setValues(displayValue + input, null, canAddDot);

        break;
    }
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.displayContainer}>
        <Text numberOfLines={1} style={styles.displayText}>
          {calculatorValues.displayValue}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        {buttonTitles.map((values, index) => {
          return (
            <View style={styles.inputRow} key={index}>
              {values.map((value, idx) => {
                return (
                  <Button
                    value={value}
                    key={idx}
                    onPress={() => handlePress(value)}
                  />
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Home;
