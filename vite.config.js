export default (config) => {
  // Configuration directe sans mergeConfig
  config.server = {
    host: true,
    port: config.server?.port || 1337,
    allowedHosts: true,
  };

  config.resolve = {
    ...config.resolve,
    alias: {
      "@": "/src",
    },
  };

  return config;
};
