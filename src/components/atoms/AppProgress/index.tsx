import React from 'react';
import PieChart from 'react-native-pie-chart';

interface AppProgressProps {
  value: number;
}

const AppProgress = ({ value }: AppProgressProps) => {
  return <PieChart widthAndHeight={200} sliceColor={['#F44336', '#2196F3']} series={[value, 100 - value]} />;
};

export default AppProgress;
