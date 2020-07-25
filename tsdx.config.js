const postcss = require('rollup-plugin-postcss');

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    const isFirstBundle = !!options.writeMeta;

    config.plugins.push(
      postcss({
        modules: true,
        inject: false,
        extract: isFirstBundle,
      })
    );

    return config;
  },
};
