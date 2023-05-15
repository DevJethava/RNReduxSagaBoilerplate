import Color from './Color';
import { StatusBar, StyleSheet } from 'react-native';

const CommonStyles = StyleSheet.create({
  cardview: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 8,
    backgroundColor: Color.white,
    padding: 20,
    borderRadius: 16,
  },
  container: {
    flex: 1,
  },
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreen: {
    height: '100%',
    width: '100%',
  },
});

export default CommonStyles;
