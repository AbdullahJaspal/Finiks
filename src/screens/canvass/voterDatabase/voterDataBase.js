import {Icon} from '@rneui/themed';
import React from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import {moderateScale} from '../../../constants/ScalingUnit';
import theme from '../../../constants/theme';
import Styles from './styles';

const VoterDatabase = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.mainCont}>
      <View style={Styles.header}>
        <View style={Styles.headerLeft}>
          <Icon
            onPress={() => {
              navigation.goBack();
            }}
            size={18}
            name="left"
            type="antdesign"
            color={theme.colors.red}
          />
          <View>
            <Text style={Styles.headerTitle}>
              Frodo at The Shire, Middle Earth
            </Text>
            <Text style={Styles.headerDes}>4 Voters Found</Text>
          </View>
        </View>
        <View style={Styles.headerRight}>
          <Text style={Styles.filterText}>Filter</Text>
          <View
            style={{
              backgroundColor: theme.colors.red,
              padding: 3,
              borderRadius: 100,
            }}>
            <Icon
              name="filter-list"
              type="oct-icons"
              color={theme.colors.white}
              size={moderateScale(15)}
            />
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={Styles.tabs}>
          <Text style={Styles.tabTitle}>Bilbo Baggins</Text>
          <Text style={Styles.tabDescription}>
            1 Bag End, The Shire, Middle Earth:
          </Text>
          <Text style={Styles.tabDescription}>
            M{'       '}|{'       '}102
            {'       '}|{'       '}Independent
          </Text>
        </View>
        <View style={[Styles.tabs, {borderRightColor: '#FD914D'}]}>
          <Text style={Styles.tabTitle}>Bilbo Baggins</Text>
          <Text style={Styles.tabDescription}>
            1 Bag End, The Shire, Middle Earth:
          </Text>
          <Text style={Styles.tabDescription}>
            M{'       '}|{'       '}102
            {'       '}|{'       '}Independent
          </Text>
        </View>
        <View style={[Styles.tabs, {borderRightColor: '#FDBD59'}]}>
          <Text style={Styles.tabTitle}>Bilbo Baggins</Text>
          <Text style={Styles.tabDescription}>
            1 Bag End, The Shire, Middle Earth:
          </Text>
          <Text style={Styles.tabDescription}>
            M{'       '}|{'       '}102
            {'       '}|{'       '}Independent
          </Text>
        </View>
        <View style={[Styles.tabs, {borderRightColor: '#20C2CB'}]}>
          <Text style={Styles.tabTitle}>Bilbo Baggins</Text>
          <Text style={Styles.tabDescription}>
            1 Bag End, The Shire, Middle Earth:
          </Text>
          <Text style={Styles.tabDescription}>
            M{'       '}|{'       '}102
            {'       '}|{'       '}Independent
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default VoterDatabase;
