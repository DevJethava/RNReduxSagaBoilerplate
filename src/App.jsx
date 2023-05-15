/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/index';
import Toast from 'react-native-toast-message';
import AppNavigation from './navigation/AppNavigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { darkTheme, lightTheme } from "./utils";
import { ThemeContext, ThemeProvider } from './utils/ThemeManager'

const App = () => {
  // const { theme } = React.useContext(ThemeContext)

  // const scheme = useColorScheme();
  // console.log(scheme)

  const [isDarkTheme, setDarkTheme] = React.useState(false)

  return (

    <ThemeProvider>
      <Provider store={store}>
        <Main />
      </Provider>
    </ThemeProvider>

  )
}

const Main = () => {

  const { theme } = React.useContext(ThemeContext)
  console.log(theme)

  const mTheme = useSelector((state) => state.home?.theme);
  console.log("MAIN theme => ", mTheme)

  // const scheme = useColorScheme();
  // console.log(scheme)

  return (
    <PaperProvider theme={mTheme === 'dark' ? darkTheme : lightTheme}>
      <AppNavigation />
      <Toast />
    </PaperProvider >
  )
}

export default App;
