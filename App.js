import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from './components/styles';
import checkHighScores from './components/checkhighscores';


const Item = ({ item }) => (
  <View style={styles.rowContainer}>
    <Text style={styles.text}>{item.id}.</Text>
    <Text style={styles.text}>{item.name}:...</Text>
    <Text style={styles.scores}>{item.score}</Text>
  </View>
)


const App = () => {
  const [time, setTime] = useState(0);
  const [clickCounter, setClickCounter] = useState(0);
  const [trackHighScore, setTrackHighScore] = useState(false);

  const [highScores, setHighScores] = useState([
    { id: 1, name: 'Name', score: 10 },
    { id: 2, name: 'Name', score: 9 },
    { id: 3, name: 'Name', score: 8 },
    { id: 4, name: 'Name', score: 7 },
    { id: 5, name: 'Name', score: 6 },
    { id: 6, name: 'Name', score: 5 },
    { id: 7, name: 'Name', score: 4 },
    { id: 8, name: 'Name', score: 3 },
    { id: 9, name: 'Name', score: 2 },
    { id: 10, name: 'Name', score: 1 }
  ]); 

  const renderItem = ({ item }) => (
    <Item item={item} />
  ); 
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {     // reduce the time if there is time left
        setTime(time-1)
      }
    }, 1000);
    return () => clearInterval(interval); // clears the scheduled interval once the component unmounts
  }, [time]);

  return (
    <View style={styles.container}>
      <Text style={styles.caption1}>Clicking Game!</Text>
      <Text style={styles.text}>Click "Start new" to begin!</Text>
      <Text style={styles.text}>You have 5 seconds to click "Press me"</Text>
      <Text style={styles.text}>as many times as you can! </Text>
      <Text style={styles.caption2}>Clicks: {clickCounter}, time left: {time} s</Text>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (time > 0) { // counts clicks if there is time left
              setClickCounter(clickCounter + 1)
            } else {
              checkHighScores(
                highScores,setHighScores,
                clickCounter,
                trackHighScore, setTrackHighScore
              )
              setTrackHighScore(false)
            }
          }}
          >
          <Text style={styles.buttonText}>Click me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {  // resets the counter to zero and give 10 seconds playing time
            setClickCounter(0)
            setTime(5) 
            setTrackHighScore(true)
          }}
          >              
          <Text style={styles.buttonText}>Start new</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.highScores}>
        <Text style={styles.boldText}>High scores:</Text>
        <FlatList
          data={highScores}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Text style={styles.text}>© Mika Viitaniemi 2022</Text>
    </View>
  );
};

export default App;