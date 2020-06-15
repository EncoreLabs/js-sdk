import { Environment } from '../../shared/typings';

export const pathSettings = {
  [Environment.Dev]: 'https://checkout-service.devtixuk.io/api/v1',
  [Environment.Qa]: 'https://checkout-service.qatixuk.io/api/v1',
  [Environment.Staging]: 'https://checkout-service.stagingtixuk.io/api/v1',
  [Environment.Prod]: 'https://checkout-service.tixuk.io/api/v1',
};
