/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: { appDir: true },
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['media.graphassets.com'],
	},
};

module.exports = nextConfig;
