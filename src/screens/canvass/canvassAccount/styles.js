import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../constants/ScalingUnit';
import theme from '../../../constants/theme';

const Styles = StyleSheet.create({
  header: {
    height: moderateScale(50),
    borderBottomWidth: moderateScale(0.5),
    borderColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(20),
  },
  accountTab: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    elevation: moderateScale(5),
    backgroundColor: 'white',
    height: moderateScale(50),
    borderRadius: moderateScale(5),
    marginTop: moderateScale(30),
  },
  ongoingCont: {
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: moderateScale(40),
    marginVertical: moderateScale(30),
  },
  ongoingText: {
    color: '#AFAFAF',
    borderBottomColor: theme.colors.border,
    borderBottomWidth: moderateScale(1),
    paddingBottom: moderateScale(5),
  },
  addCont: {
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: moderateScale(30),
  },
  addContText: {
    color: '#AFAFAF',
    borderBottomColor: '#AFAFAF',
    marginBottom: moderateScale(15),
  },
  logo: {
    alignSelf: 'center',
    width: moderateScale(70),
    height: moderateScale(40),
    marginTop: moderateScale(30),
  },
});

export default Styles;
