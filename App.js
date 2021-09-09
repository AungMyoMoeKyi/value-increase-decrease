import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TestScreen from "./screens/TestScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <TestScreen/>
      <TestScreen/>
      <TestScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
