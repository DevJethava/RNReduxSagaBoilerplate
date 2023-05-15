import { DefaultTheme } from 'react-native-paper';

const lightTheme = {
  ...DefaultTheme,
  roundness: 2,
  Color: {
    ...DefaultTheme.colors,
    primary: '#1A1A1A',
    accent: '#FAFAFA',
    white: 'rgb(97, 97, 97)',
    black: 'rgb(227, 242, 253)',
    blackBackground: '#141415',
    blue: '#0356b9',
    grayText: '#a1a1a6',
    inputtextBackground: '#FFFFFF',
  },
};

export default lightTheme;
