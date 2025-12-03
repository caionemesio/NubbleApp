import {useAuthIsEmailAvailable, useAuthIsUsernameAvailable} from '@domain';
import {UseFormGetFieldState, UseFormWatch} from 'react-hook-form';

import {SignUpSchema} from './signUpSchema';

type Props = {
  watch: UseFormWatch<SignUpSchema>;
  getFieldState: UseFormGetFieldState<SignUpSchema>;
};

type ReturnValues = {
  errorMessage?: string;
  notReady: boolean;
  isFetching: boolean;
};

export function useAsyncValidation({watch, getFieldState}: Props): {
  usernameValidation: ReturnValues;
  emailValidation: ReturnValues;
} {
  const username = watch('username');
  const usernameState = getFieldState('username');
  const usernameIsValid = usernameState.isDirty && !usernameState.invalid;

  const usernameQuery = useAuthIsUsernameAvailable({
    username,
    enabled: usernameIsValid,
  });

  const email = watch('email');
  const emailState = getFieldState('email');
  const emailIsValid = emailState.isDirty && !emailState.invalid;

  const emailQuery = useAuthIsEmailAvailable({
    email,
    enabled: emailIsValid,
  });

  return {
    usernameValidation: {
      errorMessage: usernameQuery.isUnavailable
        ? 'username indisponível'
        : undefined,
      notReady: usernameQuery.isFetching || usernameQuery.isUnavailable,
      isFetching: usernameQuery.isFetching,
    },
    emailValidation: {
      errorMessage: emailQuery.isUnavailable ? 'email indisponível' : undefined,
      notReady: emailQuery.isFetching || emailQuery.isUnavailable,
      isFetching: emailQuery.isFetching,
    },
  };
}
