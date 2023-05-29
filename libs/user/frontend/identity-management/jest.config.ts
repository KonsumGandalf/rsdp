/* eslint-disable */
export default {
	displayName: 'user-frontend-identity-management',
	preset: '../../../../jest.preset.js',
	setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
	coverageDirectory: '../../../../coverage/libs/user/frontend/identity-management',
	transform: {
		'^.+\\.(ts|mjs|js|html)$': [
			'jest-preset-angular',
			{
				tsconfig: '<rootDir>/tsconfig.spec.json',
				stringifyContentPathRegex: '\\.(html|svg)$',
			},
		],
	},
	transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
	snapshotSerializers: [
		'jest-preset-angular/build/serializers/no-ng-attributes',
		'jest-preset-angular/build/serializers/ng-snapshot',
		'jest-preset-angular/build/serializers/html-comment',
	],
};
