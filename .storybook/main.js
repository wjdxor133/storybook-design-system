const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.(js|mdx|tsx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
    "@storybook/addon-docs/preset",
    "@storybook/addon-controls",
  ],

  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [["react-app", { flow: false, typescript: true }]],
            plugins: [
              [
                require.resolve("babel-plugin-named-asset-import"),
                {
                  loaderMap: {
                    svg: {
                      ReactComponent:
                        "@svgr/webpack?-svgo,+titleProp,+ref![path]",
                    },
                  },
                },
              ],
            ],
          },
        },
        require.resolve("react-docgen-typescript-loader"),
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
