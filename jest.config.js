module.exports = {
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 99,
      lines: 100,
      statements: 99,
    },
  },
  verbose: true,
  testURL: 'http://localhost', // fixes an issue with localStorage
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|ico|svg|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/tests/__mocks__/styleMock.js',
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/__tests__/*.ts',
    '!src/**/__mocks__/*.ts',
    '!src/**/index.ts',
    '!src/**/constants/*.ts',
    '!src/utils/test-utils.ts',
  ]
};
