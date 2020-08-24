import {StyleSheet} from 'react-native';
import COLORS from '../constants/colors';

const styles = StyleSheet.create({
  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.BORDER,
  },
  inputButtonHighlighted: {
    backgroundColor: COLORS.HIGHLIGHT,
  },
  inputButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
});

export default styles;
