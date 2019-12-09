import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import reducers from './src/reducers';

import AppContainer from './src/routes';

export default function App() {
  
  return (
    // <Provider store={ createStore(reducers) }>
    //   <View style={styles.container}>
    //     <Text>Open up App.js to start working on your app!</Text>
    //   </View>
    // </Provider>
    <View style={styles.screens}>
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  screens: {
    flex: 1
  }
});
