import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const timer = 10;

  return (
    <View style={styles.container}>
      <Text style={styles.caption2}>Welcome to the </Text>
      <Text style={styles.caption1}>Mouse Clicking Game!</Text>
      <Text style={styles.text}>Click "Start new" to begin!</Text>
      <Text style={styles.text}>You have 10 seconds to click, time left: {timer} s</Text>
      <Text style={styles.text}>You manage to click {count} times</Text>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count + 1)}
          >
          <Text style={styles.buttonText}>Click me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(0)}
          >
          <Text style={styles.buttonText}>Start new</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.highScores}>
        <Text style={styles.caption2}>High scores:</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>1. place...: </Text>
          <Text style={styles.scores}>55 clicks</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>2. place...: </Text>
          <Text style={styles.scores}>38 clicks</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>3. place...: </Text>
          <Text style={styles.scores}>23 clicks</Text>
        </View>
      </View>
      <Text style={styles.text}>© Mika Viitaniemi 2022</Text>
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 10,
    borderRadius: 50,
    borderColor: '#f194ff',
    backgroundColor: '#841584',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowContainer: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  highScores: {
    margin: 10,
    padding: 15,
    borderWidth: 3,
    borderRadius: 25,
    borderColor: '#f194ff',
  },
  text: {
    margin: 2,
    color: '#f5f5f5'
  },
  scores: {
    textAlign: 'right',
    color: '#f5f5f5'
  },
  caption1: {
    color: '#f5f5f5',
    fontSize: 30,
    padding: 5
  },
  caption2: {
    color: '#f5f5f5',
    fontSize: 20
  },
  button: {
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#f194ff',
    padding: 15,
    margin: 10
  },
  buttonText: {
    fontWeight: 'bold'
  }
});

export default App;