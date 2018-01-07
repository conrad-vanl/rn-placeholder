/* eslint-disable react/no-array-index-key */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Line from './../line/line';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

function MultiWords({ words, textSize, wordStyle }) {
  const borderStyle = {
    borderRightWidth: textSize,
    borderRightColor: 'transparent',
  };

  const lastIndex = words.length - 1;

  return (
    <View style={styles.container}>
      {words.map((word, index) => (
        <View key={index} style={[lastIndex !== index && borderStyle, { width: word.width }]}>
          <Line textSize={textSize} color={word.color} style={wordStyle} />
        </View>
      ))}
    </View>
  );
}

MultiWords.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      width: PropTypes.string.isRequired,
    }),
  ),
  textSize: PropTypes.number,
  wordStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

MultiWords.defaultProps = {
  words: [],
  textSize: 12,
  wordStyle: null,
};

export default MultiWords;
