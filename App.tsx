import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Animated, SafeAreaView} from 'react-native';
import MoveBallAnimation from './src/moveBall';
import FadeInAndOutAnimation from './src/fadeInOut';
import CircularProgressIndicator from './src/circularProgressIndicator';
import ProgressBar from './src/ProgressBar';
import BarGraph from './src/barGraph';
import Histogram from './src/histogram';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      
      {/* <MoveBallAnimation /> */}
      {/* <FadeInAndOutAnimation /> */}
      {/* <Text>Hello</Text> */}
      {/* <ProgressBar/> */}
      {/* <BarGraph/> */}
      <Histogram/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;

