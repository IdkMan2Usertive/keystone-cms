const {withKeystone} = require('@keystone-6/core/next');

/** @type {import('next').NextConfig} */
const nextConfig = withKeystone({
  reactStrictMode: true,
});

module.exports = nextConfig;
