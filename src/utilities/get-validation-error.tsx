import { TypeWithKey } from '../models';

export const getValidationError = (errorCode: any) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: 'Error en la red',
    ERR_TIMEOUT: 'El tiempo ha sido excedido',
    ERR_CANCEL: 'La petición fue cancelada',
    ERR_UNKNOWN: 'Error desconocido',
    ERR_400: 'Error 400',
    ERR_401: 'Error 401',
    ERR_403: 'Error 403'
  };

  return codeMatcher[errorCode];
};