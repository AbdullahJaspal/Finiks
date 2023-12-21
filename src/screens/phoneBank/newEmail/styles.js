import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../constants/ScalingUnit';
import theme from '../../../constants/theme';

const Styles = StyleSheet.create({
  mainCont: {
    flex: 1,
  },
  header: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: moderateScale(50),
    alignSelf: 'center',
    alignItems: 'center',
  },
  titleCont: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: '500',
  },
  iconCont: {
    backgroundColor: theme.colors.border,
    width: moderateScale(28),
    height: moderateScale(28),
    borderRadius: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputCont: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: moderateScale(0.5),
    borderColor: theme.colors.border,
    height: moderateScale(30),
    marginTop: moderateScale(10),
  },
  inputTitle: {
    color: theme.colors.border,
  },
  inputText: {
    width: '90%',
    padding: 0,
    height: '100%',
  },
  emailContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    padding: moderateScale(10),
  },
  email: {
    width: '95%',
    alignSelf: 'center',
  },
});
export default Styles;
