import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../constants/ScalingUnit';

const Styles = StyleSheet.create({
  mainCont: {
    flex: 1,
  },
  header: {
    width: '90%',
    height: moderateScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  headerMid: {flexDirection: 'row', width: '50%', alignItems: 'center'},
  iconCont: {
    backgroundColor: '#972121',
    padding: 8,
    borderRadius: 100,
  },
  chatCont: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '55%',
    marginLeft: moderateScale(10),
  },
  message: {
    backgroundColor: 'white',
    padding: moderateScale(10),
    width: '95%',
    borderRadius: 10,
    marginLeft: moderateScale(5),
    alignSelf: 'flex-end',
  },
  name: {fontWeight: '600', marginBottom: 10},
  msg: {
    fontWeight: '300',
    fontSize: 13,
  },
  bottom: {
    flexDirection: 'row',
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomCont: {
    width: '90%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default Styles;
