import React, {useState} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AuthHead from '../../../components/authHead';
import Button from '../../../components/button';
import {Loading} from '../../../components/Loading';
import theme from '../../../constants/theme';
import {useToast} from 'react-native-toast-notifications';
import {authLoad, getConfirmationCode} from '../../../redux/actions/auth';
import Styles from './styles';

const ForgetPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  const {authLoading} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const toast = useToast();
  const handleNav = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      email: email,
    });
    console.log(raw);
    dispatch(authLoad(true));
    dispatch(getConfirmationCode(raw, success, error));
  };
  const success = val => {
    console.log('success');
    console.log(val);
    dispatch(authLoad(false));
    toast.show(val.message, {
      animationType: 'zoom-in',
      type: 'success',
    });
    navigation.navigate('VerifyCode', {email: email});
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
    <ImageBackground
      style={Styles.bgImage}
      source={require('../../../images/bgImage1.png')}>
      <SafeAreaView style={{flex: 1}}>
        <AuthHead />
        <Text style={Styles.description}>
          Provide your accounts email for which you want to reset your password
        </Text>
        <View style={Styles.inputCont}>
          <TextInput
            style={Styles.inputText}
            placeholder="Enter your Email"
            placeholderTextColor={'white'}
            onChangeText={setEmail}></TextInput>
        </View>
        <View style={Styles.signupCont}>
          <Text style={Styles.signupText}>
            Didn't get code?
            <Text style={{color: theme.colors.red}}> Resend</Text>
          </Text>
        </View>
        <Button
          onPress={() => {
            handleNav();
          }}
          title={'Reset'}
        />
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          title={'Cancel'}
        />
      </SafeAreaView>
      <Loading visible={authLoading} />
    </ImageBackground>
  );
};

export default ForgetPassword;
