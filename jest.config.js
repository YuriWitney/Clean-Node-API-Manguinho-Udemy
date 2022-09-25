module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  preset: '@shelf/jest-mongodb',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/protocols/*.ts',
    '!<rootDir>/src/**/signUpProtocols.ts',
    '!<rootDir>/src/**/account.ts',
    '!<rootDir>/src/**/add-account.ts',
    '!<rootDir>/src/**/db-add-account-protocols.ts'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
