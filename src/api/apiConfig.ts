import {authApi, AuthCredentials, authService} from '@domain';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

interface InterceptorParams {
  authCredentials: AuthCredentials | null;
  removeCredentials: () => Promise<void>;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
}

export function registerInterceptor({
  authCredentials,
  removeCredentials,
  saveCredentials,
}: InterceptorParams) {
  const interceptor = api.interceptors.response.use(
    response => response,
    async responseError => {
      const failedRequest = responseError.config;
      const hasNotRefreshTokenRequest = !authCredentials?.refreshToken;
      const isRefreshTokenRequest =
        authApi.isRefreshTokenRequest(failedRequest);
      if (responseError.response.status === 401) {
        if (
          hasNotRefreshTokenRequest ||
          isRefreshTokenRequest ||
          failedRequest.sent
        ) {
          removeCredentials();
          return Promise.reject(responseError);
        }
        failedRequest.sent = true;
        const newAuthCredentials = await authService.authenticateByRefreshToken(
          authCredentials?.refreshToken,
        );
        saveCredentials(newAuthCredentials);
        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;
        return api(failedRequest);
      }
      return Promise.reject(responseError);
    },
  );
  return () => api.interceptors.response.eject(interceptor);
}
