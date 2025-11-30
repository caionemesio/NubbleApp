import {api} from '@api';

import {AuthBody, AuthCredentialsAPI} from './authTypes';

async function signIn(data: AuthBody): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>('login', data);
  return response.data;
}

async function signOut(): Promise<string> {
  const response = await api.get<string>('profile/logout');
  return response.data;
}

export const authApi = {
  signIn,
  signOut,
};
