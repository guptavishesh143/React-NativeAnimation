/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
// Create an animated version of the Circle component
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

// Circular Progress Bar component
const CircularProgress = ({ progress }) => {
  const radius = 50; // Radius of the circle
  const strokeWidth = 10; // Stroke width of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

  // Animated value for stroke dashoffset
  const [strokeDashoffset] = useState(new Animated.Value(circumference));

  useEffect(() => {
    // Function to animate the progress when the progress value changes
    Animated.timing(strokeDashoffset, {
      toValue: circumference - (progress / 100) * circumference, // Calculate the dashoffset based on progress
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Svg width="120" height="120">
        {/* Background Circle */}
        <Circle
          cx="60" // Center of the circle (x)
          cy="60" // Center of the circle (y)
          r={radius} // Radius of the circle
          stroke="#e6e6e6" // Light grey color for the background circle
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Animated Circle for the progress */}
        <AnimatedCircle
          cx="60" // Center of the circle (x)
          cy="60" // Center of the circle (y)
          r={radius} // Radius of the circle
          stroke="#4db8ff" // Color for the progress stroke
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference} // Total length of the circle
          strokeDashoffset={strokeDashoffset} // Animated value for the stroke dashoffset
          strokeLinecap="round" // Round ends for the stroke
        />
      </Svg>
      {/* Progress percentage text */}
      <Text style={{ fontSize: 24, marginTop: 10 }}>{`${progress}%`}</Text>
    </View>
  );
};

export default function LineGraph() {
  const [progress, setProgress] = useState(0);

  // Function to increment the progress
  const incrementProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  return (
    <View
      style={{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Circular Progress Bar</Text>

      {/* Circular progress component */}
      <CircularProgress progress={progress} />

      {/* Button to increase progress */}
      <TouchableOpacity
        onPress={incrementProgress}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: '#4db8ff',
          borderRadius: 5,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 18 }}>Increase Progress</Text>
      </TouchableOpacity>
    </View>
  );
}

