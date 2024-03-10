import React, { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Context, Status } from '@src/contexts/ui';
import { useControlledComponent } from '@src/lib/hooks';
import { TouchableWithoutFeedback } from 'react-native';
import { AppButton, AppInputField, dissmissKeyboard } from '@src/components/atoms';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    marginVertical: 20,
  },
  button: {
    marginTop: 20,
  },
});

const SignUp = () => {
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
        <AppButton
          onPress={() => setApplicationState(Status.AUTHORIZED)}
          style={styles.button}
          label="Create User Account"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
