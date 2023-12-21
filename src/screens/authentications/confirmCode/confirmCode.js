import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Image,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {useDispatch} from 'react-redux';
import AuthHead from '../../../components/authHead';
import Button from '../../../components/button';
import {getConfirmationCode} from '../../../redux/actions/auth';
import Styles from './styles';

const {width, height} = Dimensions.get('window');

const ConfirmCode = ({navigation, route}) => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef();
  const {email} = route.params;
  const dispatch = useDispatch();
  useEffect(() => {
    getCode();
  }, []);

  const getCode = () => {
    var data = JSON.stringify({
      email: email,
    });

    dispatch(getConfirmationCode(data, success, error));
  };

  const success = data => {
    toast.show(data.message, {
      animationType: 'zoom-in',
      type: 'success',
    });
    console.log(data);
    navigation.navigate('ConfirmCode', {email: email});
  };
  const error = data => {
    dispatch(authLoad(false));
    console.log(data);
    toast.show(data.message, {
      animationType: 'zoom-in',
      type: 'danger',
    });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={Styles.mainCont}
        source={require('./../../../images/bgImage1.png')}>
        <ScrollView style={{height}}>
          <AuthHead />
          <View style={Styles.middleCont}>
            <Text style={Styles.middleTopText}>
              Enter your OTP we sent you on your email.{'\n'}
              <Text style={{fontSize: 14}}>{email}</Text>
            </Text>
            <View
              style={{
                width: width / 1.2,
                alignItems: 'center',
                backgroundColor: '#453535',
                height: 40,
                borderRadius: 10,
              }}>
              <TextInput
                style={Styles.inputText}
                placeholder="Invite Code"
                placeholderTextColor={'#6F6969'}></TextInput>
            </View>
          </View>
          <View style={Styles.bottomCont}>
            <Button
              onPress={() => {
                navigation.navigate('Login');
              }}
              title={'Confirm'}
            />
            <Button
              onPress={() => {
                navigation.goBack();
              }}
              title={'Cancel'}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default ConfirmCode;
