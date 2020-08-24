import {StyleSheet} from 'react-native';
import COLORS from './constants/colors';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  displayContainer: {
    flex: 2,
    backgroundColor: COLORS.DARK_GRAYISH_RED,
    justifyContent: 'center',
  },
  displayText: {
    color: COLORS.WHITE,
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 20,
  },
  inputContainer: {
    flex: 8,
    backgroundColor: COLORS.WHITE,
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default styles;
