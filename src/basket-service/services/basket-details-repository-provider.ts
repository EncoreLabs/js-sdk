import { contentService } from '../../content-service/services';
import { getBasketServiceRepository } from './repository-provider';
import { Environment, Settings } from '../../shared/typings';

let environment;
let basketApiUrl;
let contentApiUrl;
let contentImagesUrl;
let title;

const setEnvironment = (env: Environment, settings?: Settings, widgetTitle?: string) => {
  environment = env;

  basketApiUrl = settings?.basketApiUrl;

  contentApiUrl = settings?.contentApiUrl;

  contentImagesUrl = settings?.contentImagesUrl;

  title = widgetTitle;
};

const getRepository = () => {
  if (!environment) {
    return null;
  }

  const settings = {
    basketApiUrl,
    contentApiUrl,
    contentImagesUrl,
  };

  const contentRepository = contentService.create(environment, settings, title);
  const basketRepository = getBasketServiceRepository(environment, settings, title);
  const { getProduct, getImages } = contentRepository;
  const { getDeliveries } = basketRepository;

  return {
    getShowDetails: getProduct,
    getImages,
    getDeliveries,
  }
};

export const basketDetailsRepositoryProvider = {
  setEnvironment,
  getRepository,
};
