import {createMMKV} from 'react-native-mmkv';

import {Storage} from '../storage';

const MMKV = createMMKV();

export const MMKVStorage: Storage = {
  getItem: async key => {
    const item = MMKV.getString(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  },
  setItem: async (key, value) => {
    MMKV.set(key, JSON.stringify(value));
  },
  removeItem: async key => {
    MMKV.remove(key);
  },
};
