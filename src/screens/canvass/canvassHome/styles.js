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
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: moderateScale(50),
    alignItems: 'center',
  },
  nameCont: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    justifyContent: 'space-between',
  },
  lowerCont: {
    alignItems: 'center',
  },
  searchText: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: theme.colors.darkRed,
    marginTop: 20,
  },
  byVoterCont: {
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScale(40),
  },
  byVoterText: {
    color: theme.colors.darkRed,
    fontWeight: '600',
  },
  inputCont: {
    width: '100%',
    elevation: 5,
    backgroundColor: 'white',

    borderRadius: moderateScale(5),
    paddingLeft: moderateScale(10),
    marginTop: moderateScale(10),
  },
  input: {
    height: moderateScale(40),
    padding: 0,
  },
  orText: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    marginTop: 20,
    color: theme.colors.authText,
  },
  searchButton: {
    width: moderateScale(50),
    height: moderateScale(50),
    backgroundColor: theme.colors.darkRed,
    borderRadius: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(50),
  },
});
export default Styles;
