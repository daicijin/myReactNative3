import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Page } from '@src/constants/path';
import { Detail, Home } from '@src/pages/private';
import RootStackPramsList from '../Params/stacks';
import { HeaderLeft, headerStyle, headerTintColor } from '../Header';
import { AppColor } from '@src/constants/theme';

const Stack = createStackNavigator<RootStackPramsList>();

const cardStyle = {
  backgroundColor: AppColor.MAIN,
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Page.HOME} screenOptions={{ cardStyle, headerStyle, headerTintColor }}>
      <Stack.Screen name={Page.HOME} component={Home} options={{ headerLeft: () => <HeaderLeft />, title: 'Home' }} />
      <Stack.Screen name={Page.DETAIL} component={Detail} options={{ title: 'Details' }} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
