import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native';

export default function MoveBallAnimation(params) {
  const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0];

  function moveBall() {
    Animated.timing(value, {
      toValue: {x: 100, y: 100},
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }
  return (
    <>
      <Animated.View style={value.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
      <TouchableOpacity
        onPress={() => {
          moveBall();
        }}>
        <Text>Hey, Click me!</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red',
  },
});

