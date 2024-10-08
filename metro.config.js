const {getDefaultConfig} = require('expo/metro-config');
const {mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = mergeConfig(getDefaultConfig(__dirname), {isCSSEnabled: true});

module.exports = withNativeWind(config, {input: './global.css'});
