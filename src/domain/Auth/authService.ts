import {api} from '@api';

import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {AuthBody, AuthCredentials} from './authTypes';

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

async function updateToken(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

async function removeToken() {
  api.defaults.headers.common.Authorization = null;
}

export const authService = {
  signIn,
  signOut,
  updateToken,
  removeToken,
};
