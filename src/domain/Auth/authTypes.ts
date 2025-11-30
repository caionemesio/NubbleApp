import {User, UserAPI} from '../User';

export interface AuthBody {
  email: string;
  password: string;
}

export interface AuthCredentials {
  token: string;
  user: User;
}

export interface AuthCredentialsAPI {
  auth: {
    token: string;
    type: string;
  };
  user: UserAPI;
}
