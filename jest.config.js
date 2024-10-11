module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
	  '\\.(css|less)$': 'identity-obj-proxy',
	},
	testPathIgnorePatterns: ['<rootDir>/dist/'],
  };
  