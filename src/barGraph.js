/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Button,
  Easing,
} from 'react-native';

// Bar component that accepts height and color as props
const Bar = ({ height, color }) => {
  return (
    <View
      style={{
        height: 200,
        width: 40,
        backgroundColor: 'black',
        justifyContent: 'flex-end',
        marginHorizontal: 5,
      }}>
      <Animated.View
        style={{
          height: height,
          width: 40,
          backgroundColor: color,
        }}
      />
    </View>
  );
};

// Data for the bar graph (fruit names and values)
const data = [
  {
    id: 1,
    name: 'Mango',
    data: 80,
  },
  {
    id: 2,
    name: 'Apple',
    data: 10,
  },
  {
    id: 3,
    name: 'Guava',
    data: 40,
  },
];

export default function BarGraph() {
  // Initialize animated values for each bar's height
  const [barHeights, setBarHeights] = useState(data.map(() => new Animated.Value(0)));

  // Start animating the bars
  const startAnimatingBars = () => {
    const animations = barHeights.map((barHeight, index) =>
      Animated.timing(barHeight, {
        toValue: data[index].data, // Final height based on the data
        duration: 1000,
        delay: index * 500, // Delay based on the index to animate bars one by one
        useNativeDriver: false,
        easing: Easing.ease,
      }),
    );

    // Animate bars in sequence
    Animated.sequence(animations).start();
  };

  // Render the graph
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Bar Graph</Text>

        <View style={styles.graphContainer}>
          {/* Left Y-axis (values) */}
          <View style={styles.yAxis}>
            <Text style={styles.yAxisLabel}>100</Text>
            <Text style={styles.yAxisLabel}>80</Text>
            <Text style={styles.yAxisLabel}>60</Text>
            <Text style={styles.yAxisLabel}>40</Text>
            <Text style={styles.yAxisLabel}>20</Text>
            <Text style={styles.yAxisLabel}>0</Text>
          </View>

          {/* Bars Container */}
          <View style={styles.barsContainer}>
            {barHeights.map((barHeight, index) => (
              <View key={index}>
                <Bar color="yellow" height={barHeight} />
              </View>
            ))}
          </View>
        </View>

        {/* X-axis (labels) */}
        <View style={styles.xAxis}>
          {data.map((item, index) => (
            <Text key={index} style={styles.xAxisLabel}>
              {item.name}
            </Text>
          ))}
        </View>

        {/* Buttons */}
        <Button title="Start Animation" onPress={startAnimatingBars} />
        <Button
          title="Clear Animation"
          onPress={() => {
            barHeights.forEach((barHeight) => barHeight.setValue(0));
          }}
        />
      </View>
    </>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {

    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  graphContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderWidth:1
  },
  yAxis: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 200,
    marginRight: 10,
  },
  yAxisLabel: {
    fontSize: 14,
    color: 'black',
  },
  barsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  xAxis: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    
  },
  xAxisLabel: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
});

