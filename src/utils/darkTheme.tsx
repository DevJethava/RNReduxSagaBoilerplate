import { DefaultTheme } from 'react-native-paper';

const darkTheme = {
    ...DefaultTheme,
    roundness: 2,
    Color: {
        ...DefaultTheme.colors,
        primary: '#1A1A1A',
        accent: '#FAFAFA',
        white: '#ffffff',
        black: '#000000',
        blackBackground: '#141415',
        blue: '#0356b9',
        grayText: '#a1a1a6',
        inputtextBackground: '#1c1c1e',
    },
};

export default darkTheme;
