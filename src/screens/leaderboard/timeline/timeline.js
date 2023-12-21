import React from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Line from '../../../components/line';
import {moderateScale} from '../../../constants/ScalingUnit';
import theme from '../../../constants/theme';
import Styles from './styles';

const Timeline = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.mainCont}>
      <View style={Styles.header}>
        <Text
          onPress={() => {
            navigation.goBack();
          }}
          style={Styles.headerCancel}>
          Cancel
        </Text>
        <Text style={Styles.headerTitle}>Timeline</Text>
        <Text
          onPress={() => {
            navigation.goBack();
          }}
          style={Styles.headerCancel}>
          Update
        </Text>
      </View>
      <Line />
      <ScrollView>
        <View style={Styles.midCont}>
          <Text style={{color: theme.colors.red}}>
            What timeline do you want to see the results for?
          </Text>
          <Text style={Styles.select}>Select Below:</Text>
          <View style={Styles.tab}>
            <View style={{width: '88%'}}>
              <Text style={Styles.tabTitle}>Today</Text>
              <Text style={{fontSize: moderateScale(12)}}>
                See how many people you have influenced today!
              </Text>
            </View>
            <BouncyCheckbox
              size={18}
              fillColor="#49C661"
              unfillColor="#FFFFFF"
              iconStyle={{borderColor: '#D9D9D9'}}
              onPress={() => {}}
            />
          </View>
          <View style={Styles.tab}>
            <View style={{width: '88%'}}>
              <Text style={Styles.tabTitle}>This Week</Text>
              <Text style={{fontSize: moderateScale(12)}}>
                See how many people you have influenced in the past week!
              </Text>
            </View>
            <BouncyCheckbox
              size={18}
              fillColor="#49C661"
              unfillColor="#FFFFFF"
              iconStyle={{borderColor: '#D9D9D9'}}
              onPress={() => {}}
            />
          </View>
          <View style={Styles.tab}>
            <View style={{width: '88%'}}>
              <Text style={Styles.tabTitle}>This Month</Text>
              <Text style={{fontSize: moderateScale(12)}}>
                See how many people you have influenced in the past Month!
              </Text>
            </View>
            <BouncyCheckbox
              size={18}
              fillColor="#49C661"
              unfillColor="#FFFFFF"
              iconStyle={{borderColor: '#D9D9D9'}}
              onPress={() => {}}
            />
          </View>
          <View style={Styles.tab}>
            <View style={{width: '88%'}}>
              <Text style={Styles.tabTitle}>This Year</Text>
              <Text style={{fontSize: moderateScale(12)}}>
                See how many people you have influenced in the past 265 Days!
              </Text>
            </View>
            <BouncyCheckbox
              size={18}
              fillColor="#49C661"
              unfillColor="#FFFFFF"
              iconStyle={{borderColor: '#D9D9D9'}}
              onPress={() => {}}
            />
          </View>
          <View style={Styles.tab}>
            <View style={{width: '88%'}}>
              <Text style={Styles.tabTitle}>This Cycle</Text>
              <Text style={{fontSize: moderateScale(12)}}>
                See how many people you have influenced in this election cycle
              </Text>
            </View>
            <BouncyCheckbox
              size={18}
              fillColor="#49C661"
              unfillColor="#FFFFFF"
              iconStyle={{borderColor: '#D9D9D9'}}
              onPress={() => {}}
            />
          </View>
          <View style={Styles.tab}>
            <View style={{width: '88%'}}>
              <Text style={Styles.tabTitle}>All Time</Text>
              <Text style={{fontSize: moderateScale(12)}}>
                See how many people you have influenced while using Finiks!
              </Text>
            </View>
            <BouncyCheckbox
              size={18}
              fillColor="#49C661"
              unfillColor="#FFFFFF"
              iconStyle={{borderColor: '#D9D9D9'}}
              onPress={() => {}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Timeline;
