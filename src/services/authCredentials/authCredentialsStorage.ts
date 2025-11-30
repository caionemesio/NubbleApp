import {AuthCredentials} from '@domain';

import {storage} from '../storage';

const AUTH_KEY = '@AuthCredentials';

async function set(ac: AuthCredentials) {
  await storage.setItem(AUTH_KEY, ac);
}

async function get(): Promise<AuthCredentials | null> {
  const authCredentials = await storage.getItem<AuthCredentials>(AUTH_KEY);
  return authCredentials;
}

async function remove(): Promise<void> {
  await storage.removeItem(AUTH_KEY);
}

export const authCredentialsStorage = {
  set,
  get,
  remove,
};
