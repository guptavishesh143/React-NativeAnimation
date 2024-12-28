import React, {useState} from 'react';

import {Text, View, Animated, Button, Easing} from 'react-native';
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

const Bar = ({height, color}) => {
  return (
    <View
      style={{
        height: 200,
        width: 40,
        backgroundColor: 'black',
        justifyContent: 'flex-end',
      }}>
      <Animated.View
        style={{
          height: height,
          width: 40,
          backgroundColor: 'yellow',
        }}
      />
    </View>
  );
};

export default function Histogram() {
  const [barHeights, setBarHeights] = useState(
    data.map(() => new Animated.Value(0)),
  );

  const startAnimation = () => {
    const animation = barHeights.map((item, index) => {
      return Animated.timing(item, {
        toValue: data[index].data,
        duration: 1000,
        delay: index * 500, // Delay based on the index to animate bars one by one
        useNativeDriver: false,
        easing: Easing.ease,
      });
    });

    Animated.parallel(animation).start();
  };
  return (
    <>
      <View>
        <Text>Histogram Graph</Text>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 20,
            borderBottomWidth: 4,
            margin: 12,
            borderLeftWidth: 4,
          }}>
          {barHeights.map((item, index) => {
            return (
              <>
                <View style={{marginLeft: 4}}>
                  <Bar height={item} />
                </View>
              </>
            );
          })}
        </View>
        <Button
          title="start"
          onPress={() => {
            startAnimation();
          }}
        />
        <Button
          title="Clear"
          onPress={() => {
            barHeights.map(() => new Animated.Value(0));
          }}
        />
      </View>
    </>
  );
}

