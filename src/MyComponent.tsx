import React, { useEffect, useState } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
    height: 32,
  },
});

const MyComponent = () => {
  const [width] = useState(new Animated.Value(0));
  const [color] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(width, {
        toValue: 100,
        duration: 2500,
        useNativeDriver: false,
      }),
      Animated.sequence([
        Animated.spring(width, {
          toValue: 256,
          friction: 4,
          useNativeDriver: false,
        }),
        Animated.timing(width, {
          toValue: 0,
          duration: 1500,
          easing: Easing.bounce,
          useNativeDriver: false,
        }),
      ]),
    ]).start(() => {
      setTimeout(() => {
        width.setValue(0);
        color.setValue(0);
      }, 100);
    });
  }, [color, width]);

  const backgroundColor = color.interpolate({
    inputRange: [0, 100],
    outputRange: ['rgb(0, 128, 128)', 'rgb(128, 0, 128)'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.block, { width, backgroundColor }]} />
    </View>
  );
};

export default MyComponent;
