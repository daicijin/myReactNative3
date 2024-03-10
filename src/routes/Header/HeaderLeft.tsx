import React, { useCallback, useEffect } from 'react';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppColor } from '@src/constants/theme';

const HeaderLeft = () => {
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  }, [navigation]);

  useEffect(() => {
    console.log('@@@ mount page header @@@');

    return () => {
      console.log('@@@ dismount page header @@@');
    };
  });

  return <Icon.Button name="bars" backgroundColor={AppColor.MAIN} color={AppColor.WHITE} onPress={onPress} />;
};

export default HeaderLeft;
