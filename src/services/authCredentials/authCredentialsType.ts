import {AuthCredentials} from '@domain';

interface AuthCredentialsService {
  authCredentials: AuthCredentials | null;
  saveCredentials: (credentials: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
  isLoading: boolean;
  userId: number | null;
}

export type {AuthCredentialsService};
