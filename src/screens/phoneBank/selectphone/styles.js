import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const Styles = StyleSheet.create({
  header: {
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  nameCont: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    justifyContent: 'space-between',
  },
  accountTab: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    elevation: 5,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
    marginTop: 30,
  },
  ongoingCont: {
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },
  ongoingText: {
    color: '#AFAFAF',
    borderBottomColor: '#AFAFAF',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
});

export default Styles;
