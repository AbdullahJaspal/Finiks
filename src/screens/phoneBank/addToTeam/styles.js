import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../constants/ScalingUnit';
import theme from '../../../constants/theme';

const Styles = StyleSheet.create({
  mainCont: {
    flex: 1,
  },
  header: {
    height: moderateScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: moderateScale(0.5),
    borderColor: theme.colors.border,
    paddingHorizontal: moderateScale(15),
  },

  cancel: {
    fontSize: moderateScale(12),
    color: theme.colors.red,
  },
  add: {
    fontSize: moderateScale(12),
    color: theme.colors.red,
  },
  middleCont: {
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
    height: moderateScale(130),
  },
  middleTopText: {
    color: theme.colors.red,
    fontSize: moderateScale(16),
    fontWeight: '300',
    marginVertical: moderateScale(10),
  },
  bottomCont: {
    flexGrow: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  bottomTitle: {
    color: theme.colors.red,
  },
  tab: {
    borderColor: theme.colors.border,
    borderWidth: 0.5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: moderateScale(10),
    marginTop: moderateScale(10),
  },
  tabTextCont: {
    width: '88%',
  },
  heading: {
    color: theme.colors.red,
  },
  description: {
    color: theme.colors.secondary,
    fontSize: moderateScale(10),
  },
});

export default Styles;
