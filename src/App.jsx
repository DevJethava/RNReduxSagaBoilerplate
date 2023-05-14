/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        <Text>RNBoilerplate</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlignVertical: "center",
    textAlign: "center"
  }
});

export default App;
