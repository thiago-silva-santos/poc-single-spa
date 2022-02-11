const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};

// const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

// const singleSpaWebpackConfigPatched = {
//   ...singleSpaWebpackConfig,
//   devServer: {
//     ...singleSpaWebpackConfig.devServer,
//     static: {
//       directory: singleSpaWebpackConfigPatched.devServer.contentBase,
//     },
//   }
// };

// delete singleSpaWebpackConfigPatched.devServer.contentBase;

// module.exports = (config, options) => {
//   const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

//   // Feel free to modify this webpack config however you'd like to
//   return singleSpaWebpackConfig;
// };