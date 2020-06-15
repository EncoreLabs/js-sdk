import { Environment } from '../../shared/typings';

export const pathSettings = {
  [Environment.Dev]: {
    api: 'https://content-service.qatixuk.io/api/v1',
    images: 'https://content-service.devtixuk.com/images',
  },
  [Environment.Qa]: {
    api: 'https://content-service.qatixuk.io/api/v1',
    images: 'https://content-service.qatixuk.com/images',
  },
  [Environment.Staging]: {
    api: 'https://content-service.stagingtixuk.io/api/v1',
    images: 'https://content-service.stagingtixuk.com/images',
  },
  [Environment.Prod]: {
    api: 'https://content-service.tixuk.io/api/v1',
    images: 'https://content-service.tixuk.com/images',
  },
};
