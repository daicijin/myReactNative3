import React, { useEffect, useState } from 'react';
import { Animated, ViewStyle } from 'react-native';
import { ProgressView } from '@react-native-community/progress-view';

interface ProgressProps {
  progress: number;
  color: string;
  style: ViewStyle;
}

const AnimatedProgressView = Animated.createAnimatedComponent(ProgressView);

const Progress = (props: ProgressProps) => {
  const [progress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(progress, {
      toValue: props.progress,
      friction: 4,
      useNativeDriver: true,
    }).start();
  }, [progress, props.progress]);

  return <AnimatedProgressView progress={progress} progressTintColor={props.color} style={props.style} />;
};

Progress.defaultProps = {
  color: '#0a7ffb',
};

export default Progress;
