import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

// HomeStack
import HomeScreen from '../containers/Home/HomeScreen';

import AppLoader from '../components/AppLoader';
import { Screen } from '../utils';
import HistoryScreen from '../containers/Home/HistoryScreen';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={Screen.HomeScreen}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name={Screen.HistoryScreen}
        component={HistoryScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const Stack = createStackNavigator();

const AppNavigation = () => {
  const appLoading = useSelector(state => state.appLoader?.appLoading);

  React.useEffect(() => { }, []);

  if (appLoading === true) {
    return <AppLoader />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={Screen.HomeStack}
          component={HomeStackScreen}
          options={{
            title: 'Home',
            headerShown: false,
            headerTransparent: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
