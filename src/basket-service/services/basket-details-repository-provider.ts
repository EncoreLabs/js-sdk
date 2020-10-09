import { contentService } from '../../content-service/services';
import { getBasketServiceRepository } from './repository-provider';
import { Environment, Settings, SourceInformation } from '../../shared/typings';

let environment;
let basketApiUrl;
let contentApiUrl;
let contentImagesUrl;
let source;

const setEnvironment = (
  env: Environment,
  settings?: Settings,
  sourceInformation?: SourceInformation,
) => {
  environment = env;

  basketApiUrl = settings?.basketApiUrl;

  contentApiUrl = settings?.contentApiUrl;

  contentImagesUrl = settings?.contentImagesUrl;

  source = sourceInformation;
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

  const contentRepository = contentService.create(environment, settings, source);
  const basketRepository = getBasketServiceRepository(environment, settings, source);
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
