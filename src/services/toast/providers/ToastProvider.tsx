import {createContext, PropsWithChildren, useState} from 'react';

import {Toast, ToastService} from '../toastTypes';

export const ToastContext = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hideToast: () => {},
});

export function ToastProvider({children}: PropsWithChildren<{}>) {
  const [toast, setToast] = useState<Toast | null>(null);
  const showToast = (newToast: Toast) => {
    setToast(newToast);
  };
  const hideToast = () => {
    setToast(null);
  };

  return (
    <ToastContext.Provider value={{toast, showToast, hideToast}}>
      {children}
    </ToastContext.Provider>
  );
}
