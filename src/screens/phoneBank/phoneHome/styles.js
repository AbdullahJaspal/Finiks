import React from 'react';
import {SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../constants/ScalingUnit';
import theme from '../../../constants/theme';
const {width, height} = Dimensions.get('screen');
const Styles = StyleSheet.create({
  headerCont: {
    width: '100%',
    borderBottomWidth: moderateScale(0.5),
    borderColor: '#C4C4C4',
  },
  lowerHeaderCont: {
    width: '90%',
    borderColor: '#C4C4C4',
    alignSelf: 'center',
    paddingVertical: moderateScale(5),
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: moderateScale(50),
    paddingBottom: moderateScale(10),
  },
  iconCont: {
    flexDirection: 'row',
    alignItem: 'center',
    width: '14%',
    justifyContent: 'space-between',
  },
  nameCont: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    justifyContent: 'space-between',
  },
  iconC: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabsCont: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScale(10),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tab: {
    backgroundColor: theme.colors.red,
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(25),
  },
  add: {
    width: moderateScale(28),
    height: moderateScale(28),
    backgroundColor: theme.colors.red,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInfoCont: {
    marginTop: 20,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    color: theme.colors.red,
    fontWeight: '700',
    marginVertical: 3,
  },
  options: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalContainer: {
    height: height,
    width: width,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    width: width / 1.2,
    height: height / 1.6,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 20,
  },
  modalHead: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
    height: moderateScale(35),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cancel: {
    color: theme.colors.red,
  },
  modalTitle: {
    fontSize: moderateScale(16),
    fontWeight: '500',
  },
  modalTabs: {
    flexDirection: 'row',
    width: width / 1.2,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.border,
  },
  tabs: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(40),
  },
  searchCont: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  search: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E2E2E2',
    borderRadius: moderateScale(5),
    paddingHorizontal: moderateScale(5),
  },
});
export default Styles;
