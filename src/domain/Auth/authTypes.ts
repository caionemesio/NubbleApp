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

export interface SignUpDataApi {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}
export interface FieldIsAvailableAPI {
  message: string;
  isAvailable: boolean;
}

export interface ForgotPasswordParams {
  email: string;
}
