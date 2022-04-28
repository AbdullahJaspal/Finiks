import React, {useState} from 'react';
import {SafeAreaView, View, Image, Text, TouchableOpacity} from 'react-native';
import {CheckBox, Icon} from '@rneui/themed';
import Styles from './styles';
import theme from '../../../constants/theme';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const SelectPhone = ({navigation}) => {
  const [check4, setCheck4] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={Styles.header}>
        <Icon
          onPress={() => {
            navigation.goBack();
          }}
          size={18}
          name="left"
          type="antdesign"
          color={theme.colors.red}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Accounts');
          }}
          style={Styles.nameCont}>
          <Icon color="#D12E2F" name="chevron-small-down" type="entypo" />
          <Text style={{fontWeight: 'bold', color: '#545454'}}>
            HJ For Congress
          </Text>
          <Icon
            type="material-community"
            name="card-multiple"
            color="#D12E2F"
            size={18}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}
            style={Styles.accountTab}>
            <Image
              style={{width: 30, height: 30}}
              resizeMode="contain"
              source={require('../../../images/accountImg.png')}
            />
            <Text style={{fontSize: 20, fontWeight: '200'}}>
              Adam Christensen
            </Text>
            <Image
              style={{width: 30, height: 30}}
              resizeMode="contain"
              source={require('../../../images/arrow.png')}
            />
          </TouchableOpacity>

          <View style={Styles.ongoingCont}>
            <Text style={Styles.ongoingText}>Phone Banking</Text>
          </View>
          <View style={Styles.accountTab}>
            <Text style={{color: theme.colors.red, fontWeight: '700'}}>
              Use Your Own Phone Number
            </Text>
            <BouncyCheckbox
              size={18}
              fillColor="#49C661"
              unfillColor="#FFFFFF"
              iconStyle={{borderColor: '#D9D9D9'}}
              onPress={() => {
                navigation.navigate('PhoneHome');
              }}
            />
          </View>
          <View style={[Styles.accountTab, {marginTop: 5}]}>
            <Text style={{color: theme.colors.red, fontWeight: '700'}}>
              Use An Auto-dialer
            </Text>
            <BouncyCheckbox
              size={18}
              fillColor="#49C661"
              unfillColor="#FFFFFF"
              iconStyle={{borderColor: '#D9D9D9'}}
              textStyle={{fontFamily: 'JosefinSans-Regular'}}
            />
          </View>

          <View style={[Styles.accountTab, {marginTop: 5}]}>
            <Text style={{color: theme.colors.red, fontWeight: '700'}}>
              Use A Predictive Dialer
            </Text>
            <BouncyCheckbox
              size={18}
              fillColor="#49C661"
              unfillColor="#FFFFFF"
              iconStyle={{borderColor: '#D9D9D9'}}
              textStyle={{fontFamily: 'JosefinSans-Regular'}}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SelectPhone;
