module.exports = async () => ({
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  verbose: true,
});
