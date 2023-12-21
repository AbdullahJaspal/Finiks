import React from 'react';
import {StyleSheet} from 'react-native';
import theme from '../../../constants/theme';

const Styles = StyleSheet.create({
  eventTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    alignItems: 'center',
    height: 55,
    borderColor: theme.colors.gray,
  },
  timeCont: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
    marginRight: 7,
  },
  createEventHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  eventName: {
    height: 55,
    backgroundColor: 'white',
    elevation: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 5,
  },
  eventNameInner: {
    height: 55,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorButton: {
    backgroundColor: theme.colors.orange,
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 5,
  },
});

export default Styles;
