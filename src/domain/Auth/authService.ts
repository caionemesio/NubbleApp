import {api} from '@api';

import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {AuthBody, AuthCredentials, SignUpData} from './authTypes';

async function signIn(data: AuthBody): Promise<AuthCredentials> {
  try {
    const authCredentialsAPI = await authApi.signIn(data);
    return authAdapter.toAuthCredentials(authCredentialsAPI);
  } catch (error) {
    throw new Error('email ou senha inválido');
  }
}

async function signOut(): Promise<string> {
  const message = await authApi.signOut();
  return message;
}

async function signUp(signUpData: SignUpData): Promise<void> {
  await authApi.signUp(signUpData);
}

async function isUsernameAvailable(username: string): Promise<boolean> {
  const {isAvailable} = await authApi.isUsernameAvailable({username});
  return isAvailable;
}

async function isEmailAvailable(email: string): Promise<boolean> {
  const {isAvailable} = await authApi.isEmailAvailable({email});
  return isAvailable;
}

async function updateToken(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

async function removeToken() {
  api.defaults.headers.common.Authorization = null;
}

async function requestNewPassword(email: string) {
  const {message} = await authApi.forgotPassword({email});
  return message;
}

async function authenticateByRefreshToken(
  refreshToken: string,
): Promise<AuthCredentials> {
  const authCredentialsAPI = await authApi.refreshToken(refreshToken);
  return authAdapter.toAuthCredentials(authCredentialsAPI);
}

export const authService = {
  signIn,
  signOut,
  signUp,
  isUsernameAvailable,
  isEmailAvailable,
  updateToken,
  removeToken,
  requestNewPassword,
  authenticateByRefreshToken,
};
