import {createContext, useEffect, useState} from 'react';

import {AuthCredentials, authService} from '@domain';

import {authCredentialsStorage} from '../authCredentialsStorage';
import {AuthCredentialsService} from '../authCredentialsType';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: true,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
});

export const AuthCredentialsProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function startAuthCredentials() {
    try {
      const ac = await authCredentialsStorage.get();
      if (ac) {
        authService.updateToken(ac.token);
        setAuthCredentials(ac);
        setIsLoading(false);
      }
    } catch (error) {
      //TODO error handling
    } finally {
      setIsLoading(false);
    }
  }

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    authService.updateToken(ac.token);
    authCredentialsStorage.set(ac);
    setAuthCredentials(ac);
    setIsLoading(false);
  }

  async function removeCredentials(): Promise<void> {
    authService.removeToken();
    authCredentialsStorage.remove();
    setAuthCredentials(null);
    setIsLoading(false);
  }
  useEffect(() => {
    startAuthCredentials();
  }, []);

  return (
    <AuthCredentialsContext.Provider
      value={{
        authCredentials,
        isLoading,
        saveCredentials,
        removeCredentials,
      }}>
      {children}
    </AuthCredentialsContext.Provider>
  );
};
