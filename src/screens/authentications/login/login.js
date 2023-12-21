import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Image,
  Text,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import AuthHead from '../../../components/authHead';
import Button from '../../../components/button';
import {Loading} from '../../../components/Loading';
import theme from '../../../constants/theme';
import {authLoad, userLogin} from '../../../redux/actions/auth';
import Styles from './styles';
import {useToast} from 'react-native-toast-notifications';
import {Icon} from 'react-native-elements';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const {authLoading} = useSelector(state => state.auth);
  const toast = useToast();
  useEffect(() => {
    dispatch(authLoad(false));
  }, []);

  const dispatch = useDispatch();
  const handleNav = () => {
    navigation.navigate('BottomTab');
    // if (email === '' || password === '') {
    //   toast.show('Please fill all fields', {
    //     animationType: 'zoom-in',
    //     type: 'danger',
    //   });
    // } else {
    //   dispatch(authLoad(true));
    //   var data = JSON.stringify({
    //     email: email,
    //     password: password,
    //   });
    //   dispatch(userLogin(data, success, error));
    // }
  };

  const success = data => {
    toast.show(data.message, {
      animationType: 'zoom-in',
      type: 'success',
    });
    console.log(data);
    navigation.navigate('BottomTab');
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
      <ScrollView disbled={true}>
        <ImageBackground
          style={Styles.bgImage}
          source={require('../../../images/bgImage1.png')}>
          <AuthHead top={true} />
          <View style={Styles.credCont}>
            <Text style={Styles.title}>Email</Text>
            <View style={Styles.inputCont}>
              <TextInput
                style={Styles.inputText}
                placeholder="Enter your Email"
                keyboardType="email-address"
                placeholderTextColor={theme.colors.authText}
                onChangeText={val => {
                  setEmail(val);
                }}
              />
            </View>
            <Text style={Styles.title}>Password</Text>
            <View style={Styles.inputCont}>
              <TextInput
                style={Styles.inputText}
                placeholder="Enter Password"
                placeholderTextColor={theme.colors.authText}
                secureTextEntry={!showPass}
                onChangeText={val => {
                  setPassword(val);
                }}
              />
              <Icon
                name={showPass ? 'eye-with-line' : 'eye'}
                type="entypo"
                color={'white'}
                onPress={() => {
                  setShowPass(!showPass);
                }}
              />
            </View>
          </View>
          <View style={Styles.forgetTextCont}>
            <Text
              style={Styles.forgetText}
              onPress={() => {
                navigation.navigate('ForgetPassword');
              }}>
              Forget Password ?
            </Text>
          </View>
          <View>
            <Button
              onPress={() => {
                handleNav();
              }}
              title="Login"
            />
          </View>

          <View style={Styles.signupCont}>
            <Text style={Styles.signupText}>
              Didn't have an account?
              <Text
                style={{color: theme.colors.red}}
                onPress={() => {
                  navigation.navigate('Signup');
                }}>
                {' '}
                Signup
              </Text>
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
      <Loading visible={authLoading} />
    </SafeAreaView>
  );
};
export default Login;
