import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';

export default function ProgressBar() {
  // Animated value for the progress bar
  const [progress1] = useState(new Animated.Value(10)); // Initial width is 10%

  // Function to start the progress animation
  const startProgress = () => {
    // Sequence of animations
    Animated.sequence([
      // First animation: Animate to 33%
      Animated.timing(progress1, {
        toValue: 33, // 33% of the container width
        duration: 2000,
        useNativeDriver: false, // We can't animate width natively, so we use false
        
      }),
      // Second animation: Animate to 66%
      Animated.spring(progress1, {
        toValue: 66, // 66% of the container width
        duration: 2000,
        useNativeDriver: false,
      }),
      // Third animation: Animate to 100%
      Animated.timing(progress1, {
        toValue: 100, // 100% of the container width
        duration: 2000,
        useNativeDriver: false,
      }),
    ]).start();
  };
  const resetProgress = () => {
    progress1.setValue(0); // Reset progress to 0%
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Progress BAR</Text>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          width: '100%',
          borderWidth: 1,
          borderColor: 'black',
        }}>
        {/* Animated progress box */}
        <Animated.View
          style={{
            height: 20,
            width: progress1.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'], // Interpolate width from 0% to 100%
            }),
            backgroundColor: 'yellow', // Yellow color for the progress bar
          }}
        />
      </View>

      {/* Button to start the progress animation */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => startProgress()}>
          <Text style={styles.buttonText}>Start Progress Bar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            // Function to reset progress bar to 0%
            resetProgress()
          }>
          <Text style={styles.buttonText}>Restart Progress Bar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    // width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

