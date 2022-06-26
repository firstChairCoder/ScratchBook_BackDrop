module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx"
          ],
          root: ["./"],
          alias: {
            "@assets": "./assets",
            "@components": "./src/components",
            "@utils": "./src/utils",
            "@constants": "./src/constants",
            "@screens": "./src/screens",
            "@navigation": "./src/navigation",
            underscore: "lodash"
          }
        }
      ],
      "react-native-reanimated/plugin"
    ]
  };
};