import React from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Line from '../../../components/line';
import {moderateScale} from '../../../constants/ScalingUnit';
import theme from '../../../constants/theme';
import Styles from './styles';

const Criteria = ({navigation}) => {
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
        <Text style={Styles.headerTitle}>Leaderboard</Text>
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
            What leaderboard do you want to see?
          </Text>
          <Text style={Styles.select}>Select Below:</Text>
          <View style={Styles.tab}>
            <View style={{width: '88%'}}>
              <Text style={Styles.tabTitle}>Voters Influenced</Text>
              <Text style={{fontSize: moderateScale(12)}}>
                Total number of voters you have surveyed, messaged, added tags,
                or changed contact info
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
              <Text style={Styles.tabTitle}>Voters Surveyed</Text>
              <Text style={{fontSize: moderateScale(12)}}>
                Total number of voters you have surveyed
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
              <Text style={Styles.tabTitle}>Voters Messaged</Text>
              <Text style={{fontSize: moderateScale(12)}}>
                Total number of voters you have texted, emailed, called, or
                contacted via social media
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
              <Text style={Styles.tabTitle}>Doors Knocked</Text>
              <Text style={{fontSize: moderateScale(12)}}>
                Total number of voters doors you have knocked
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
              <Text style={Styles.tabTitle}>Phone Calls Compleeted</Text>
              <Text style={{fontSize: moderateScale(12)}}>
                Total numbers of phone numbers you've called
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
              <Text style={Styles.tabTitle}>Contact Info Added</Text>
              <Text style={{fontSize: moderateScale(12)}}>
                Total number of voter contact info you have added
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

export default Criteria;
