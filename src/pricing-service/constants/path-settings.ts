import { Environment } from '../../shared/typings';

export const pathSettings = {
  [Environment.Dev]: 'https://pricing-service.devtixuk.io/api/v3',
  [Environment.Qa]: 'https://pricing-service.qatixuk.io/api/v3',
  [Environment.Staging]: 'https://pricing-service.stagingtixuk.io/api/v3',
  [Environment.Prod]: 'https://pricing-service.tixuk.io/api/v3',
};
