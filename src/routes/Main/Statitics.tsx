import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Page } from '@src/constants/path';
import { Statistics, Detail } from '@src/pages/private';
import RootStackPramsList from '../Params/stacks';
import { HeaderLeft, headerStyle, headerTintColor } from '../Header';
import { AppColor } from '@src/constants/theme';

const Stack = createStackNavigator<RootStackPramsList>();

const cardStyle = {
  backgroundColor: AppColor.MAIN,
};

const StatisticsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Page.STATISTICS} screenOptions={{ cardStyle, headerStyle, headerTintColor }}>
      <Stack.Screen
        name={Page.STATISTICS}
        component={Statistics}
        options={{ headerLeft: () => <HeaderLeft />, title: 'Statistics' }}
      />
      <Stack.Screen name={Page.DETAIL} component={Detail} options={{ title: 'Details' }} />
    </Stack.Navigator>
  );
};

export default StatisticsNavigator;
