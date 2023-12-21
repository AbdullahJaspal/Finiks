import React, {useState} from 'react';
import {SafeAreaView, View, Image, Text, TouchableOpacity} from 'react-native';
import {CheckBox, Icon} from '@rneui/themed';
import Styles from './styles';
import theme from '../../../constants/theme';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const CanvassAccount = ({navigation}) => {
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
        <Text style={{fontWeight: '500'}}>My Account</Text>
        <Icon size={18} name="left" type="antdesign" color={'transparent'} />
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
            <Text style={Styles.ongoingText}>Campaign Walkbooks</Text>
          </View>
          <View style={Styles.accountTab}>
            <Text style={{color: theme.colors.red, fontWeight: '700'}}>
              District 1 Canvassing 55+
            </Text>
            <BouncyCheckbox
              size={18}
              fillColor="#49C661"
              unfillColor="#FFFFFF"
              iconStyle={{borderColor: '#D9D9D9'}}
              onPress={() => {
                navigation.navigate('Walkbook');
              }}
            />
          </View>
          <View style={[Styles.accountTab, {marginTop: 5}]}>
            <Text style={{color: theme.colors.red, fontWeight: '700'}}>
              Absentee Voters D2
            </Text>
            <BouncyCheckbox
              size={18}
              fillColor="#49C661"
              unfillColor="#FFFFFF"
              iconStyle={{borderColor: '#D9D9D9'}}
              textStyle={{fontFamily: 'JosefinSans-Regular'}}
              onPress={() => {
                navigation.navigate('Walkbook');
              }}
            />
          </View>
          <View style={Styles.addCont}>
            <Text style={Styles.addContText}>Add New List</Text>
            <Icon
              size={35}
              color={theme.colors.red}
              name="pluscircle"
              type="antdesign"
            />
          </View>
        </View>
        <Image
          resizeMode="contain"
          style={Styles.logo}
          source={require('../../../images/logoBlack.png')}
        />
      </View>
    </SafeAreaView>
  );
};
export default CanvassAccount;
