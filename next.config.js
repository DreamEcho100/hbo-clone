/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
	const envVars = {
		reactStrictMode: true,
		eslint: {
			// Warning: This allows production builds to successfully complete even if
			// your project has ESLint errors.
			ignoreDuringBuilds: true,
		},
	};

	if (phase === PHASE_DEVELOPMENT_SERVER) {
	} else {
	}

	return envVars;
};
