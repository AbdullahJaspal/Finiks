import React, {useState} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  View,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AuthHead from '../../../components/authHead';
import Button from '../../../components/button';
import {Loading} from '../../../components/Loading';
import theme from '../../../constants/theme';
import {authLoad, ConfirmCode} from '../../../redux/actions/auth';
import {useToast} from 'react-native-toast-notifications';
import Styles from './styles';

const VerifyCode = ({navigation, route}) => {
  const {email} = route.params;
  const [otp, setOtp] = useState('');
  const {authLoading} = useSelector(state => state.auth);
  const toast = useToast();
  const dispatch = useDispatch();
  const handleNav = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      otp: otp,
      email: email,
    });
    dispatch(authLoad(true));
    dispatch(ConfirmCode(raw, success, error));
  };

  const success = val => {
    console.log('success');
    console.log(val);
    dispatch(authLoad(false));
    toast.show(val.message, {
      animationType: 'zoom-in',
      type: 'success',
    });
    navigation.navigate('NewPassword');
  };

  const error = val => {
    console.log('error');
    console.log(val);
    dispatch(authLoad(false));
    toast.show(val.message, {
      animationType: 'zoom-in',
      type: 'success',
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={Styles.bgImage}
        source={require('../../../images/bgImage1.png')}>
        <AuthHead top={true} />
        <Text style={Styles.description}>
          Enter the OTP Verification Code we send onn your {email}
        </Text>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text style={Styles.title}>Verification code</Text>
          <View style={Styles.inputCont}>
            <TextInput
              style={Styles.inputText}
              placeholder=""
              placeholderTextColor={theme.colors.white}
              onChangeText={setOtp}></TextInput>
          </View>
        </View>
        <View style={Styles.bottomCont}>
          <Button
            onPress={() => {
              handleNav();
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
        <Loading visible={authLoading} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default VerifyCode;
