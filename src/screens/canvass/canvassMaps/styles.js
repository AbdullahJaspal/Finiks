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
    alignSelf: 'center',
    alignItems: 'flex-start',
    height: moderateScale(50),
    justifyContent: 'center',
  },
  tabCont: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    height: moderateScale(35),
    alignItems: 'center',
    marginBottom: moderateScale(10),
  },
  tabButtonCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '75%',
    elevation: 5,
    backgroundColor: 'white',
    height: '100%',
    borderRadius: moderateScale(5),
  },
  button: {
    width: '50%',
    alignItems: 'center',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(5),
  },
  line: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    elevation: moderateScale(5),
    backgroundColor: 'white',
    marginTop: moderateScale(10),
  },
});

export default Styles;
