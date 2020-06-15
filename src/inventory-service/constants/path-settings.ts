import { Environment } from '../../shared/typings';

export const pathSettings = {
  [Environment.Dev]: 'https://inventory-service.devtixuk.io/api/v4',
  [Environment.Qa]: 'https://inventory-service.qatixuk.io/api/v4',
  [Environment.Staging]: 'https://inventory-service.stagingtixuk.io/api/v4',
  [Environment.Prod]: 'https://inventory-service.tixuk.io/api/v4',
};
