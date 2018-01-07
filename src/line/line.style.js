import { StyleSheet } from 'react-native';

/**
 * Compute style based on props
 * @param textSize The line text size
 * @param color The line color
 * @param width The line width
 */
export default ({ textSize = 12, color = '#efefef', width = '100%', style }) => (
  StyleSheet.flatten([{
    height: textSize,
    width,
    alignSelf: 'stretch',
    backgroundColor: color,
    borderRadius: textSize / 4,
  }, style])
);
