import React, { useContext } from 'react';
import { createStackNavigator, StackCardInterpolationProps } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as UiContext from '../../contexts/ui';
import { Initial, Loading, Input } from '@src/pages/private';
import { Login, SignIn, SignUp } from '@src/pages/public';
import Home from '@src/routes/Main/Home';
import Statistics from '@src/routes/Main/Statitics';
import UserInfo from '@src/routes/Main/UserInfo';
import { Page } from '@src/constants/path';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppColor } from '@src/constants/theme';
import { headerStyle, headerTintColor } from '../Header';

const Stack = createStackNavigator();
const ModalStack = createStackNavigator();
const LoginStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeDrawer = createDrawerNavigator();
const StatisticsDrawer = createDrawerNavigator();
const forFade = ({ current }: StackCardInterpolationProps) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const cardStyle = {
  backgroundColor: AppColor.MAIN,
};

const drawerStyle = {
  backgroundColor: AppColor.MAIN,
};

const drawerContentOptions = {
  drawerActiveTintColor: AppColor.PRIMARY,
  drawerInactiveTintColor: AppColor.WHITE,
};

const HomeWithDrawer = () => {
  console.log('@@@ home_with_drawer @@@');
  return (
    <HomeDrawer.Navigator
      initialRouteName={Page.HOME}
      screenOptions={(props) => {
        console.log(props.route.name);
        return {
          headerShown: false,
          drawerStyle,
          ...drawerContentOptions,
        };
      }}
    >
      <HomeDrawer.Screen name={Page.HOME} component={Home} />
      <HomeDrawer.Screen name={Page.USER_INFO} component={UserInfo} />
    </HomeDrawer.Navigator>
  );
};

const StatisticsWithDrawer = () => {
  console.log('@@@ statistics_with_drawer @@@');
  return (
    <StatisticsDrawer.Navigator
      initialRouteName={Page.HOME}
      screenOptions={{ headerShown: false, drawerStyle, ...drawerContentOptions }}
    >
      <StatisticsDrawer.Screen name={Page.STATISTICS} component={Statistics} />
      <StatisticsDrawer.Screen name={Page.USER_INFO} component={UserInfo} />
    </StatisticsDrawer.Navigator>
  );
};

const getActiveRouteName = (state: any): string => {
  console.log(state);
  if (!state || !state.routes) {
    return '';
  }

  const route = state.routes[state.index];

  if (route.state) {
    return getActiveRouteName(route.state);
  }

  return route.name;
};

const tabBarStyle = {
  backgroundColor: AppColor.MAIN,
};

const tabContentOptions = {
  tabBarActiveTintColor: AppColor.PRIMARY,
  tabBarInactiveTintColor: AppColor.WHITE,
};

const TabRoutes = () => {
  console.log('@@@ tab_routes @@@');

  return (
    <Tab.Navigator
      initialRouteName={Page.HOME}
      screenOptions={(props: any) => {
        console.log(props.route.name);
        const routeName = getActiveRouteName(props.route.name);
        return {
          tabBarVisible: routeName !== Page.USER_INFO,
          headerShown: false,
          tabBarIcon: () => null,
          tabBarStyle,
          ...tabContentOptions,
        };
      }}
    >
      <Tab.Screen name={Page.HOME} component={HomeWithDrawer} />
      <Tab.Screen name={Page.STATISTICS} component={StatisticsWithDrawer} />
    </Tab.Navigator>
  );
};

const TabWithModalRoutes = () => {
  console.log('@@@ tab_with_modal_routes @@@');
  return (
    <ModalStack.Navigator screenOptions={{ headerShown: false, presentation: 'modal', cardStyle }}>
      <Stack.Screen name={Page.HOME} component={TabRoutes} />
      <Stack.Screen name={Page.INPUT} component={Input} />
    </ModalStack.Navigator>
  );
};

const LoginNavigator = () => {
  console.log('@@@ login_navigator @@@');
  return (
    <LoginStack.Navigator initialRouteName={Page.LOGIN} screenOptions={{ cardStyle, headerStyle, headerTintColor }}>
      <LoginStack.Screen name={Page.LOGIN} component={Login} options={{ title: 'Welcome' }} />
      <LoginStack.Screen name={Page.SIGN_IN} component={SignIn} options={{ title: 'Sign in' }} />
      <LoginStack.Screen name={Page.SIGN_UP} component={SignUp} options={{ title: 'Sign up' }} />
    </LoginStack.Navigator>
  );
};

const switchingAuthStatus = (status: UiContext.Status) => {
  console.log('@@@ switching_auth_status @@@');

  switch (status) {
    case UiContext.Status.UN_AUTHORIZED:
      return <Stack.Screen name={Page.LOGIN} component={LoginNavigator} />;
    case UiContext.Status.AUTHORIZED:
      return <Stack.Screen name={Page.HOME} component={TabWithModalRoutes} />;
    case UiContext.Status.FIRST_OPEN:
    default:
      return <Stack.Screen name={Page.INITIAL} component={Initial} />;
  }
};

const AuthWithRoutes = () => {
  const uiContext = useContext(UiContext.Context);
  console.log('@@@ auth_with_routes @@@');
  console.log(uiContext.applicationState);
  return (
    <Stack.Navigator
      initialRouteName={Page.LOADING}
      screenOptions={{
        cardStyleInterpolator: forFade,
        headerShown: false,
      }}
    >
      {uiContext.applicationState !== UiContext.Status.LOADING ? (
        switchingAuthStatus(uiContext.applicationState)
      ) : (
        <Stack.Screen name={Page.LOADING} component={Loading} />
        // <Stack.Screen name={Page.INITIAL} component={Initial} />
      )}
    </Stack.Navigator>
  );
};

export default AuthWithRoutes;
