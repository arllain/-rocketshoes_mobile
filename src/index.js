import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import './config/ReactotronConfig';
import 'react-native-gesture-handler';
import Route from './routes';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  Title: {
    alignContent: 'center',
  },
});

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Route />
    </>
  );
}

export default App;
