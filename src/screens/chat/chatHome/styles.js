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
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameCont: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    justifyContent: 'space-between',
  },
  searchCont: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(20),
  },
  search: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E2E2E2',
    borderRadius: moderateScale(5),
    paddingHorizontal: moderateScale(10),
    height: moderateScale(40),
  },
  chatTab: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  iconCont: {
   
    width: 48,
    height: 48,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontWeight: '300',
    fontSize: 14,
    borderBottomWidth: 0.5,
    borderColor: theme.colors.border,
  },
});

export default Styles;
