import { Environment } from '../../shared/typings';

export const pathSettings = {
  [Environment.Dev]: 'https://fulfilment-service.devtixuk.io/api/v1',
  [Environment.Qa]: 'https://fulfilment-service.qatixuk.io/api/v1',
  [Environment.Staging]: 'https://fulfilment-service.stagingtixuk.io/api/v1',
  [Environment.Prod]: 'https://fulfilment-service.tixuk.io/api/v1',
};
