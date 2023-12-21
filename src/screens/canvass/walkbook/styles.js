import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../constants/ScalingUnit';
import theme from '../../../constants/theme';

const Styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: moderateScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  headerTitle: {
    color: theme.colors.authText,
    fontWeight: '600',
    fontSize: moderateScale(15),
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: moderateScale(12),
    elevation: 5,
    backgroundColor: 'white',
    height: moderateScale(50),
    alignItems: 'center',
    borderRadius: moderateScale(5),
    marginTop: moderateScale(14),
  },
  tabText: {
    fontSize: moderateScale(14),
  },
  tabNumber: {
    color: theme.colors.red,
    fontWeight: '600',
  },
  logo: {
    alignSelf: 'center',
    width: moderateScale(70),
    height: moderateScale(40),
    marginTop: moderateScale(30),
    position: 'absolute',
    bottom: 1,
  },
});

export default Styles;
