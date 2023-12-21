import React from 'react';
import {StyleSheet} from 'react-native';
import theme from '../../../constants/theme';

const Styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: 'white',
    marginBottom: 10,
  },
  description: {
    color: 'white',
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 20,
  },

  inputCont: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    color: 'white',
    marginLeft: 5,
    width: '95%',
    height: '90%',
  },
});
export default Styles;
