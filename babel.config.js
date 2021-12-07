module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          alias: { '~': './src' },
          extensions: ['.js', '.jsx'],
        },
      ],
    ],
  };
};
