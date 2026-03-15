module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testMatch: [
    '<rootDir>/libs/vyracare-ui/src/**/*.spec.ts',
    '<rootDir>/apps/playground/src/**/*.spec.ts'
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$'
      }
    ]
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  moduleNameMapper: {
    '^@vyracare/design-system$': '<rootDir>/libs/vyracare-ui/src/public-api.ts'
  },
  modulePathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/libs/vyracare-ui/package.json'
  ],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'libs/vyracare-ui/src/lib/**/*.ts',
    '!libs/vyracare-ui/src/lib/**/*.spec.ts',
    '!libs/vyracare-ui/src/lib/**/*.stories.ts',
    '!libs/vyracare-ui/src/public-api.ts'
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['html', 'text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
