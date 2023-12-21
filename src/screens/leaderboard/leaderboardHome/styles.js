import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import {moderateScale} from '../../../constants/ScalingUnit';
import theme from '../../../constants/theme';

const {width, height} = Dimensions.get('screen');
const Styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? '' : 'white',
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
  renderCont: {
    height: moderateScale(350),
    width: width / 1.1,
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'flex-start',
    elevation: 5,
    backgroundColor: 'white',
    marginTop: 20,
  },
  renderView: {
    width: width / 1.1,
    alignSelf: 'center',
    height: height / 4.8,
    justifyContent: 'flex-start',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  img: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  textCont: {
    width: '90%',
    alignSelf: 'center',
    flex: 1,
  },
  welcome: {
    fontWeight: '600',
    marginBottom: moderateScale(5),
    fontSize: moderateScale(15),
  },
  welcomeDescription: {fontWeight: '300', fontSize: moderateScale(13)},
  boxCont: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    zIndex: 999,
  },
  box: {
    width: '49%',
    height: moderateScale(90),
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 15,
    borderRadius: 9,
    alignItems: 'center',
  },
  titleCont: {
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScale(15),
  },
  title: {
    fontWeight: '700',
    fontSize: moderateScale(16),
  },
  description: {
    fontSize: moderateScale(14),
    marginTop: moderateScale(3),
  },
  tab: {
    height: moderateScale(50),
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: moderateScale(5),
    marginTop: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    borderWidth: Platform.OS === 'ios' ? 0.5 : 0,
    borderColor: theme.colors.border,
  },
  icon: {
    backgroundColor: theme.colors.red,
    padding: moderateScale(3),
    borderRadius: moderateScale(100),
  },
  leaderboardTop: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 5,
    marginTop: moderateScale(20),
  },
  leaderboardTitleCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(10),
  },
  leaderboardTitle: {
    color: theme.colors.red,
    fontSize: moderateScale(18),
    fontWeight: '700',
    marginLeft: moderateScale(10),
  },
  position: {
    width: 30,
    height: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FD914D',
    fontWeight: '700',
  },
  profileNameCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: moderateScale(20),
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 100,
    marginRight: 10,
  },
});
export default Styles;
