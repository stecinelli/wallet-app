module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset', 'babel-preset-expo', /* '@babel/preset-typescript' */],
    plugins: ['@babel/plugin-proposal-export-namespace-from','react-native-reanimated/plugin']
  };
};
