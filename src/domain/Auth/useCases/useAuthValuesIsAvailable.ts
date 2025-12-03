import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

import {authService} from '../authService';

interface Param<T extends {length: number}> {
  value: T;
  enabled?: boolean;
  isAvailableFunction: (value: T) => Promise<boolean>;
  queryKey: QueryKeys;
}

function useAuthIsValueAvailable<T extends {length: number}>({
  value,
  enabled,
  isAvailableFunction,
  queryKey,
}: Param<T>) {
  const debouncedValue = useDebounce(value, 500);
  const {data, isFetching} = useQuery({
    queryKey: [queryKey, debouncedValue],
    queryFn: () => isAvailableFunction(debouncedValue),
    retry: false,
    staleTime: 20000,
    enabled: !!enabled && debouncedValue.length > 0,
  });

  const isDebouncing = value !== debouncedValue;

  return {
    isUnavailable: data === false,
    isFetching: isDebouncing || isFetching,
  };
}

export function useAuthIsUsernameAvailable({
  username,
  enabled,
}: {
  username: string;
  enabled: boolean;
}) {
  return useAuthIsValueAvailable({
    value: username,
    enabled,
    isAvailableFunction: authService.isUsernameAvailable,
    queryKey: QueryKeys.isUsernameAvailable,
  });
}

export function useAuthIsEmailAvailable({
  email,
  enabled,
}: {
  email: string;
  enabled: boolean;
}) {
  return useAuthIsValueAvailable({
    value: email,
    enabled,
    isAvailableFunction: authService.isEmailAvailable,
    queryKey: QueryKeys.IsEmailAvailable,
  });
}
