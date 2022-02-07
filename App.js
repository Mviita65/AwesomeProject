import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './components/styles';


const App = () => {
  const [time, setTime] = useState(0);
  const [clickCounter, setClickCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time-1)
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);


  return (
    <View style={styles.container}>
      <Text style={styles.caption2}>Welcome to the </Text>
      <Text style={styles.caption1}>Clicking Game!</Text>
      <Text style={styles.text}>Click "Start new" to begin!</Text>
      <Text style={styles.text}>You have 10 seconds to click, time left: {time} s</Text>
      <Text style={styles.caption2}>You manage to click {clickCounter} times</Text>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (time > 0) {
              setClickCounter(clickCounter + 1)
            }
          }}
          >
          <Text style={styles.buttonText}>Click me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {setClickCounter(0);setTime(10) }}
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

export default App;