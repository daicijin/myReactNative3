import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context, Status } from '@src/contexts/ui';
import { AppColor } from '@src/constants/theme';
import { AppAvatar, AppButton, AppLabelContainer } from '@src/components/atoms';
import formatDate from '@src/lib/format-date';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  nameText: {
    color: AppColor.WHITE,
    fontSize: 20,
    marginTop: 5,
  },
  button: {
    marginTop: 30,
  },
});

const userState = {
  name: 'test',
  createdAt: new Date('2021/01/01'),
  mailAddress: 'test@rn.com',
};

const UserInfo = () => {
  const { setApplicationState } = useContext(Context);
  const signOut = useCallback(async () => {
    setApplicationState(Status.UN_AUTHORIZED);
  }, [setApplicationState]);

  const source = useMemo(() => require('@src/assets/person.png'), []);

  useEffect(() => {
    console.log('@@@ mount page UserInfo @@@');

    return () => {
      console.log('@@@ dismount page UserInfo @@@');
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageIconContainer}>
        <AppAvatar source={source} />
        <Text style={styles.nameText}>{userState.name}</Text>
      </View>
      <AppLabelContainer label="e-mail" value={userState.mailAddress} />
      <AppLabelContainer label="createdAt" value={userState.createdAt && formatDate(userState.createdAt)} />
      <AppButton style={styles.button} onPress={signOut} label="Sign Out" />
    </View>
  );
};

export default UserInfo;
