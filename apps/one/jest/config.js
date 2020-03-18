const path = require('path');
const rootDir = path.join(__dirname, '../');

module.exports = {
  rootDir,
  testMatch: ['<rootDir>/**/*.test.js'],
  testPathIgnorePatterns: ['<rootDir>/jest/'],
  silent: true,
  coverageReporters: ['text-summary', 'lcov'],
  transform: {
    '^.+\\.m?js$': './jest/babel.transformer.js'
  },
  transformIgnorePatterns: ['node_modules'],
  moduleNameMapper: {
    '^(common)/(.*)$': '<rootDir>/../../$1/$2'
  },
  coverageThreshold: {
    global: {
      branches: 89,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};
