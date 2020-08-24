import React, {useState} from 'react';
import {Text, View} from 'react-native';

import Button from './components/Button.component';
import styles from './styles';

export const buttonTitles = [
  ['c', 'ce'],
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '−'],
  [0, '.', '=', '+'],
];

export const ARRAY_SYMBOL_CUSTOM_STYLE = ['/', '+', '−', '*'];

const initialCalculatorValues = {
  value: 0,
  selectedSymbol: '',
  previousInputValue: 0,
};

const Home = () => {
  const [calculatorValues, setCalculatorValues] = useState(
    initialCalculatorValues,
  );

  const handleButton = (input: string | number) => {
    switch (typeof input) {
      case 'number':
        let value = calculatorValues.value * 10 + input;
        setCalculatorValues({
          ...calculatorValues,
          value,
        });
        break;

      default:
        return handleStringInput(input);
    }
  };

  const handleStringInput = (input: string | number) => {
    switch (input) {
      case '/':
      case '*':
      case '+':
      case '−':
        setCalculatorValues({
          ...calculatorValues,
          selectedSymbol: input,
          previousInputValue: calculatorValues.value,
          value: 0,
        });
        break;
      case '=':
        let symbol = calculatorValues.selectedSymbol,
          value = calculatorValues.value,
          previousInputValue = calculatorValues.previousInputValue;

        if (!symbol) {
          return;
        }
        setCalculatorValues({
          ...calculatorValues,
          previousInputValue: 0,
          // eslint-disable-next-line no-eval
          value: eval(previousInputValue + symbol + value),
          selectedSymbol: '',
        });
        break;
      case 'ce':
        setCalculatorValues({
          ...calculatorValues,
          previousInputValue: 0,
          value: 0,
          selectedSymbol: '',
        });
        break;

      case 'c':
        setCalculatorValues({...calculatorValues, value: 0});
        break;
    }
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{calculatorValues.value}</Text>
      </View>
      <View style={styles.inputContainer}>
        {buttonTitles.map((values, index) => {
          return (
            <View style={styles.inputRow} key={index}>
              {values.map((value, idx) => {
                const isHighLight = calculatorValues.selectedSymbol === value;
                return (
                  <Button
                    value={value}
                    key={idx}
                    onPress={() => handleButton(value)}
                    highlight={isHighLight}
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
