import { Environment } from '../../shared/typings';

export const pathSettings = {
  [Environment.Dev]: 'https://basket-service.devtixuk.io/api/v1',
  [Environment.Qa]: 'https://basket-service.qatixuk.io/api/v1',
  [Environment.Staging]: 'https://basket-service.stagingtixuk.io/api/v1',
  [Environment.Prod]: 'https://basket-service.tixuk.io/api/v1',
};
