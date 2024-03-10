import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackPramsList from '@src/routes/Params/stacks';
import { Page } from '@src/constants/path';
import { useNavigation } from '@react-navigation/native';
import { AppColor } from '@src/constants/theme';
import { AppButton, AppLogo } from '@src/components/atoms';

const padding = 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.MAIN,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
    paddingVertical: padding,
  },
  button: {
    marginBottom: 40,
    width: 300,
  },
});

type LoginStackNavigationProps = StackNavigationProp<RootStackPramsList, 'LOGIN'>;
const Login = () => {
  const navigation = useNavigation<LoginStackNavigationProps>();
  useEffect(() => {
    console.log('@@@ mount page loading @@@');

    return () => {
      console.log('@@@ dismount page unloading @@@');
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <AppLogo />
      </View>
      <View style={styles.contentContainer}>
        <AppButton onPress={() => navigation.navigate(Page.SIGN_UP)} label="Sign Up" style={styles.button} />
        <AppButton onPress={() => navigation.navigate(Page.SIGN_IN)} label="Sign In" style={styles.button} />
      </View>
    </View>
  );
};

export default Login;
