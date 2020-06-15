import { Environment } from '../../shared/typings';

export const pathSettings = {
  [Environment.Dev]: 'https://venue-service.devtixuk.io/api/v2',
  [Environment.Qa]: 'https://venue-service.qatixuk.io/api/v2',
  [Environment.Staging]: 'https://venue-service.stagingtixuk.io/api/v2',
  [Environment.Prod]: 'https://venue-service.tixuk.io/api/v2',
};
