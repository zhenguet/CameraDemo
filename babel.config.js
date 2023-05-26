const presets = ['module:metro-react-native-babel-preset']
const plugins = []

plugins.push(
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.js', '.json'],
      alias: {
        '@': './src',
      },
    },
  ],
  [
    'react-native-reanimated/plugin',
    {
      globals: ['__example_plugin', '__example_plugin_swift'],
    },
  ],
)

module.exports = {
  presets,
  plugins,
}
