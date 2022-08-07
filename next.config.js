/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["cdnimg.melon.co.kr", "images.unsplash.com", "pds.joongang.co.kr", "media.giphy.com"],
	},
};

module.exports = nextConfig;
