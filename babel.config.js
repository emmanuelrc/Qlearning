module.exports = function (api) {
  api.cache(true);
  return {
    // Load Expo defaults and NativeWind support as presets
    presets: ['babel-preset-expo', 'nativewind/babel'],
    // React Native Reanimated plugin must be listed last
    plugins: ['react-native-reanimated/plugin'],
  };
};
