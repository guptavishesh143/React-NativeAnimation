import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useAnimatedValue,
  Animated,
  Button,
  SafeAreaView,
} from 'react-native';

export default function FadeInAndOutAnimation(params) {
  const fadeAnim = useAnimatedValue(1);

  const fadInTrigger = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadOutTrigger = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Animated.View style={[{opacity: fadeAnim}]}>
            <View style={styles.reactangle} />
          </Animated.View>

          <Button
            title="Fade In"
            onPress={() => {
              fadInTrigger();
            }}
          />
          <Button
            title="Fade Out"
            onPress={() => {
              fadOutTrigger();
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reactangle: {
    height: 100,
    width: 100,

    backgroundColor: 'green',
  },
});

