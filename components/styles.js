// React Native Styles
import { StyleSheet } from 'react-native';
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
      margin: 1,
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
      fontSize: 20,
      padding: 2
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

  export default styles;