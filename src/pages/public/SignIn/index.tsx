import React, { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Context, Status } from '@src/contexts/ui';
import { useControlledComponent } from '@src/lib/hooks';
import { TouchableWithoutFeedback } from 'react-native';
import { AppButton, AppInputField, dissmissKeyboard } from '@src/components/atoms';
import SignInWithGoogle from './SignInWithGoogle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  text: {
    marginVertical: 20,
  },
  button: {
    marginTop: 50,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

const SignIn = () => {
  const { setApplicationState } = useContext(Context);
  const MailAddress = useControlledComponent('');
  const Password = useControlledComponent('');

  useEffect(() => {
    console.log('@@@ mount page loading @@@');

    return () => {
      console.log('@@@ dismount page unloading @@@');
    };
  });

  return (
    <TouchableWithoutFeedback onPress={dissmissKeyboard}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <AppInputField
            label="email"
            value={MailAddress.value}
            onChangeText={MailAddress.onChangeText}
            style={styles.text}
          />
          <AppInputField
            label="password"
            value={Password.value}
            onChangeText={Password.onChangeText}
            style={styles.text}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.bottomContainer}>
          <SignInWithGoogle />
          <AppButton onPress={() => setApplicationState(Status.AUTHORIZED)} style={styles.button} label="Sign In" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
