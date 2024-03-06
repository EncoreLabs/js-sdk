import { Environment } from '../../shared/typings';

export const pathSettings = {
  [Environment.Dev]: {
    api: 'https://content-service.qatixuk.io/api/v1',
    apiV3: 'https://content-service.qatixuk.io/api/v3',
    images: 'https://content-service.devtixuk.com/images',
    platform: 'https://dev.todaytix.com/api/v2',
  },
  [Environment.Qa]: {
    api: 'https://content-service.qatixuk.io/api/v1',
    apiV3: 'https://content-service.qatixuk.io/api/v3',
    images: 'https://content-service.qatixuk.com/images',
    platform: 'https://qa-1.todaytix.com/api/v2',
  },
  [Environment.Staging]: {
    api: 'https://content-service.stagingtixuk.io/api/v1',
    apiV3: 'https://content-service.stagingtixuk.io/api/v3',
    images: 'https://content-service.stagingtixuk.com/images',
    platform: 'https://staging.todaytix.com/api/v2',
  },
  [Environment.Prod]: {
    api: 'https://content-service.tixuk.io/api/v1',
    apiV3: 'https://content-service.tixuk.io/api/v3',
    images: 'https://content-service.tixuk.com/images',
    platform: 'https://api.todaytix.com/api/v2',
  },
};
