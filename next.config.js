/** @type {import('next').NextConfig} */
const NextModuleFederation = require('@module-federation/nextjs-mf');
const deps = require('./package.json').dependencies;

module.exports = {
  webpack(config) {
    config.plugins.push(
      new NextModuleFederation({
        name: 'app_remote',
        filename: 'static/chunks/remoteEntry.js',
        library: { type: 'var', name: 'app_remote' },
        exposes: {
          './header': './components/header',
          './sidebar': './components/sidebar',
        },
        shared: {
          ...deps,
          react: {
            eager: true,
            singleton: true,
          },
          "react-dom": {
            eager: true,
            singleton: true,
          },
        },
        remotes: {},
      })
    );

    return config;
  },
  reactStrictMode: true,
}