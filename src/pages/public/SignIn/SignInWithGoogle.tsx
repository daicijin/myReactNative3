import React, { useContext } from 'react';
import { Context, Status } from '@src/contexts/ui';
import { AppButton } from '@src/components/atoms';

const SignInWithGoogle = () => {
  const { setApplicationState } = useContext(Context);
  return <AppButton onPress={() => setApplicationState(Status.AUTHORIZED)} icon="google" label="Sign in with Google" />;
};

export default SignInWithGoogle;
