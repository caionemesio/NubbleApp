import type {Config} from 'jest';

const config: Config = {
  preset: 'react-native',
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
  collectCoverageFrom: [
    'src/{components,utils,hooks,domain,screens}/**/*.{js,jsx,ts,tsx}',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|@react-navigation/.*|native-base|react-native-svg|react-native-safe-area-context|msw|until-async|@mswjs)',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/src/test'],
  testPathIgnorePatterns: ['.*/(M|m)ockedData/.*'],
  moduleNameMapper: {
    '^msw/node$': '<rootDir>/node_modules/msw/lib/node/index.js',
  },
};

export default config;
