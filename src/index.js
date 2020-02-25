import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import './config/ReactotronConfig';
import 'react-native-gesture-handler';

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
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.Container}>
        <View>
          <Text style={styles.Title}>Welcome to React-Native</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

export default App;
