module.exports = {
  staticFileGlobs: ["app/css/**.css", "app/img/**.*", "app/js/**.js"],
  stripPrefix: "app/",
  runtimeCaching: [
    {
      urlPattern: /this\\.is\\.a\\.regex/,
      handler: "networkFirst",
    },
  ],
};
