import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Animated, SafeAreaView} from 'react-native';
import MoveBallAnimation from './src/moveBall';
import FadeInAndOutAnimation from './src/fadeInOut';
import CircularProgressIndicator from './src/circularProgressIndicator';
import ProgressBar from './src/ProgressBar';
import BarGraph from './src/barGraph';
import Histogram from './src/histogram';
import LineGraph from './src/graphs/lineGraph';
import GesturePanResponder from './src/gestureResponder';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      
      {/* <MoveBallAnimation /> */}
      {/* <FadeInAndOutAnimation /> */}
      {/* <ProgressBar/> */}
      {/* <BarGraph/> */}
      {/* <Histogram/> */}
      {/* <LineGraph/> */}
      <GesturePanResponder />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;

