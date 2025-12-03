import {MutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

import {authService} from '../authService';

export function useAuthRequestNewPassword(options?: MutationOptions<string>) {
  const {mutate, isLoading} = useMutation<string, Error, string>({
    mutationFn: authService.requestNewPassword,
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: data => {
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
  });
  return {
    requestNewPassword: (email: string) => mutate(email),
    isLoading,
  };
}
