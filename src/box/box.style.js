import { StyleSheet } from 'react-native';

export default ({ height = 50, width = 50, radius = 0, color = '#efefef', style = {} }) => (
  StyleSheet.flatten([{
    height,
    width,
    borderRadius: radius,
    backgroundColor: color,
  }, style])
);
