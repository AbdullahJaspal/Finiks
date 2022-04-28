import React, {useRef, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import Styles from './styles';
import theme from '../../../constants/theme';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const AddToTeam = ({navigation}) => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef();

  return (
    <SafeAreaView style={Styles.mainCont}>
      <View style={Styles.header}>
        <Text
          onPress={() => {
            navigation.goBack();
          }}
          style={Styles.cancel}>
          Cancel
        </Text>
        <Text>Add to Team</Text>
        <Text style={Styles.add}>Add</Text>
      </View>
      <View style={Styles.middleCont}>
        <Text style={Styles.middleTopText}>Add a User to the Campaign</Text>
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          layout="second"
          autoFocus
          placeholder="Phone Number"
          placeholderTextColor={theme.colors.authText}
          onChangeFormattedText={text => {
            setFormattedValue(text);
          }}
          disableArrowIcon
          disableFlag
          containerStyle={{
            backgroundColor: theme.colors.white,
            borderRadius: 10,
            height: Platform.OS === 'android' ? 50 : 50,
            width: '100%',
          }}
          codeTextStyle={{
            color: theme.colors.authText,
            fontWeight: '300',
          }}
          textContainerStyle={{
            borderRadius: 10,
            backgroundColor: theme.colors.white,
          }}
          textInputProps={{
            placeholderTextColor: theme.colors.authText,
            height: 50,
          }}
          textInputStyle={{color: 'white', fontWeight: '300'}}
        />
      </View>
      <View style={Styles.bottomCont}>
        <Text style={Styles.bottomTitle}>What is their role?</Text>
        <View style={Styles.tab}>
          <View style={Styles.tabTextCont}>
            <Text style={Styles.heading}>Volunteer</Text>
            <Text style={Styles.description}>
              Search Voter Records, Record Survey Responses, Phonebank, Canvass,
              See All Main Screens
            </Text>
          </View>
          <BouncyCheckbox
            size={18}
            fillColor="#49C661"
            unfillColor={theme.colors.border}
            iconStyle={{borderColor: '#D9D9D9'}}
          />
        </View>
        <View style={Styles.tab}>
          <View style={Styles.tabTextCont}>
            <Text style={Styles.heading}>Staff Member</Text>
            <Text style={Styles.description}>
              All Volunteer Privilege's + Access Contact information +
              Additional Privileges set by Admin
            </Text>
          </View>
          <BouncyCheckbox
            size={18}
            fillColor="#49C661"
            unfillColor={theme.colors.border}
            iconStyle={{borderColor: '#D9D9D9'}}
          />
        </View>
        <View style={Styles.tab}>
          <View style={Styles.tabTextCont}>
            <Text style={Styles.heading}>Admin</Text>
            <Text style={Styles.description}>
              Full access. Create lists and surveys through online portal + All
              User activities
            </Text>
          </View>
          <BouncyCheckbox
            size={18}
            fillColor="#49C661"
            unfillColor={theme.colors.border}
            iconStyle={{borderColor: '#D9D9D9'}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddToTeam;
