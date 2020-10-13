import { Route } from '../route';
import { venueDetailsMock } from '../../../__mocks__';

const route = venueDetailsMock.venueTerminals[0].terminal.routes[0];
const getRoute = () => new Route(route);

describe('Route', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('getDescription method', () => {
    it('should return valid info', () => {
      expect(getRoute().getDescription()).toEqual(route.description);
    });
  });

  describe('getTransportModeName method', () => {
    it('should return valid info', () => {
      expect(getRoute().getTransportModeName()).toEqual(route.transportMode.name);
    });
  });
});
