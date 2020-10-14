import { TerminalItem } from '../terminal-item';
import { Route } from '../route';
import { venueDetailsMock } from '../../../__mocks__';

const terminalItem = venueDetailsMock.venueTerminals[0].terminal;
const getTerminalItem = () => new TerminalItem(terminalItem);

describe('Terminal Item', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('getName method', () => {
    it('should return valid info', () => {
      expect(getTerminalItem().getName()).toEqual(terminalItem.name);
    });
  });

  describe('getRoutes method', () => {
    it('should return valid info', () => {
      expect(getTerminalItem().getRoutes())
        .toEqual(terminalItem.routes.map(item => new Route(item)));
    });

    it('should return empty array if routes are undefined', () => {
      expect(new TerminalItem({} as any).getRoutes()).toEqual([]);
    });
  });
});
