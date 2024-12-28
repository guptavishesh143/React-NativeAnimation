import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import * as Svg from 'react-native-svg';

// Wrap the Svg.Circle component with Animated
const AnimatedCircle = Animated.createAnimatedComponent(Svg.Circle);

function CircularProgressIndicator() {
  // Animated value for progress
  const progress = useState(new Animated.Value(0))[0];

  // Function to animate the progress
  const animateProgress = () => {
    Animated.timing(progress, {
      toValue: 1, // Animate to full progress
      duration: 5000, // duration for the animation (5 seconds)
      useNativeDriver: false, // Cannot use native driver for SVG animation
    }).start();
  };

  // Calculate stroke-dashoffset for the circle based on progress
  const radius = 50; // radius of the circle
  const circumference = 2 * Math.PI * radius;

  // Interpolate the strokeDashoffset value based on progress
  const strokeDashoffset = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0], // Animate from full circumference to 0
  });

  console.log('====================================');
  console.log('HELLO CIRCULAR ANIMATION ==========>');
  console.log('====================================');
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Circular Progress Indicator</Text>

      {/* Button to trigger animation */}
      <TouchableOpacity onPress={animateProgress} style={styles.button}>
        <Text style={styles.buttonText}>Start Animation</Text>
      </TouchableOpacity>

      <View style={styles.progressContainer}>
        {/* <Svg width={100} height={100} viewBox="0 0 200 200">
          <Svg.Circle
            cx="100"
            cy="100"
            r={radius}
            stroke="lightgray"
            strokeWidth="10"
            fill="none"
          />
          <AnimatedCircle
            cx="100"
            cy="100"
            r={radius}
            stroke="green"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset} // The animated strokeDashoffset
          />
        </Svg> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'red',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  progressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CircularProgressIndicator;

