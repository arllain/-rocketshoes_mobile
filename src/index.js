import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

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

export default App;
