import React from 'react';
import { useSnackbar, VariantType} from 'notistack';

// Definimos el tipo para `useSnackbarRef` basado en el retorno de `useSnackbar`.
type SnackbarRefType = ReturnType<typeof useSnackbar>;

let useSnackbarRef: SnackbarRefType;
export const SnackbarUtilitiesConfigurator: React.FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

export const SnackbarUtilities = {
  toast(msg: string, variant: VariantType = 'default') {
    useSnackbarRef.enqueueSnackbar(msg, { variant });
  },
  success(msg: string) {
    this.toast(msg, 'success');
  },
  error(msg: string) {
    this.toast(msg, 'error');
  },
  info(msg: string) {
    this.toast(msg, 'info');
  },
  warning(msg: string) {
    this.toast(msg, 'warning');
  },
};
