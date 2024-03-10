import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Page } from '@src/constants/path';
import { UserInfo } from '@src/pages/private';
import RootStackPramsList from '../Params/stacks';
import { HeaderLeft, headerStyle, headerTintColor } from '../Header';
import { AppColor } from '@src/constants/theme';

const Stack = createStackNavigator<RootStackPramsList>();

const cardStyle = {
  backgroundColor: AppColor.MAIN,
};

const UserInfoNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Page.USER_INFO} screenOptions={{ cardStyle, headerStyle, headerTintColor }}>
      <Stack.Screen
        name={Page.USER_INFO}
        component={UserInfo}
        options={{ headerLeft: () => <HeaderLeft />, title: 'User Info' }}
      />
    </Stack.Navigator>
  );
};

export default UserInfoNavigator;
