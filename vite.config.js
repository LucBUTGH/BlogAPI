module.exports = (config) => {
  // Configuration directe sans mergeConfig
  config.server = {
    host: true,
    port: config.server?.port || 1337,
    allowedHosts: ["blogapi-m37t.onrender.com", "localhost"],
  };

  config.resolve = {
    ...config.resolve,
    alias: {
      "@": "/src",
    },
  };

  return config;
};
