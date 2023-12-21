import React, {useState} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  Dimensions,
  KeyboardAwareScrollView,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import AuthHead from '../../../components/authHead';
import Button from '../../../components/button';
import theme from '../../../constants/theme';
import {
  authLoad,
  getConfirmationCode,
  registerUser,
} from '../../../redux/actions/auth';
import Styles from './styles';
import {useToast} from 'react-native-toast-notifications';
import {Loading} from '../../../components/Loading';

const {width, height} = Dimensions.get('screen');

const Signup = ({navigation}) => {
  const [imgpath, setImgPath] = useState(
    require('../../../images/accountImgL.png'),
  );
  const [imgUri, setImgUri] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNNum, setPhoneNum] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const toast = useToast();

  const dispatch = useDispatch();
  const {authLoading} = useSelector(state => state.auth);
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImgUri(image.path);
      console.log(imgUri);
    });
  };

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log('image');
      console.log(image);
      setImgUri(image.path);
    });
  };
  const validateEmail = email => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
  };
  const handleNav = () => {
    if (
      firstName === '' ||
      lastName === '' ||
      phoneNNum === '' ||
      email === '' ||
      address === '' ||
      password === ''
    ) {
      toast.show('Fill all the fields', {
        animationType: 'zoom-in',
        type: 'danger',
      });
    } else if (!validateEmail(email)) {
      toast.show('Enter valid Email', {
        animationType: 'zoom-in',
        type: 'danger',
      });
    } else {
      dispatch(authLoad(true));
      var data = JSON.stringify({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        address: address,
        phoneNumber: phoneNNum,
      });
      dispatch(registerUser(data, success, error));
    }
  };

  const success = data => {
    toast.show(data.message, {
      animationType: 'zoom-in',
      type: 'success',
    });
    console.log(data);
    navigation.navigate('BottomTab');
    // dispatch(getConfirmationCode(data, successConfirm, errorConfirm));
  };

  const successConfirm = data => {
    toast.show(data.message, {
      animationType: 'zoom-in',
      type: 'success',
    });
    console.log(data);
    navigation.navigate('ConfirmCode', {email: email});
  };
  const errorConfirm = data => {
    dispatch(authLoad(false));
    console.log(data);
    toast.show(data.message, {
      animationType: 'zoom-in',
      type: 'danger',
    });
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
      <ScrollView>
        <ImageBackground
          style={Styles.bgImage}
          source={require('../../../images/bgImage1.png')}>
          <View style={Styles.accountImgCont}>
            <View style={Styles.imgCont}>
              <Image
                resizeMode="contain"
                style={{width: '100%', height: '100%', borderRadius: 100}}
                source={imgUri === '' ? imgpath : {uri: imgUri}}
              />
            </View>
            <View style={Styles.uploadtext}>
              <Text
                style={{color: 'white'}}
                onPress={() => {
                  openGallery();
                }}>
                Uplaod picture
              </Text>
              <Text
                style={{color: 'white'}}
                onPress={() => {
                  openCamera();
                }}>
                Take picture
              </Text>
            </View>
          </View>

          <View style={Styles.middleCont}>
            <Text style={Styles.title}>First Name</Text>
            <View style={Styles.inputCont}>
              <TextInput
                style={Styles.input}
                onChangeText={val => {
                  setFirstName(val);
                }}
              />
            </View>
            <Text style={Styles.title}>Last Name</Text>
            <View
              style={[
                Styles.inputCont,
                {
                  borderRadius: 5,
                },
              ]}>
              <TextInput
                style={Styles.input}
                onChangeText={val => {
                  setLastName(val);
                }}
              />
            </View>
            <Text style={Styles.title}>Phone Number</Text>
            <View
              style={[
                Styles.inputCont,
                {
                  borderRadius: 5,
                },
              ]}>
              <TextInput
                style={Styles.input}
                keyboardType="numeric"
                onChangeText={val => {
                  setPhoneNum(val);
                }}
              />
            </View>
            <Text style={Styles.title}>Email</Text>
            <View
              style={[
                Styles.inputCont,
                {
                  borderRadius: 5,
                },
              ]}>
              <TextInput
                style={Styles.input}
                keyboardType="email-address"
                onChangeText={val => {
                  setEmail(val.trim());
                }}
              />
            </View>
            <Text style={Styles.title}>Password</Text>
            <View
              style={[
                Styles.inputCont,
                {
                  borderRadius: 5,
                },
              ]}>
              <TextInput
                style={Styles.input}
                onChangeText={val => {
                  setPassword(val);
                }}
              />
            </View>
            <Text style={Styles.title}>Address</Text>
            <View
              style={[
                Styles.inputCont,
                {
                  borderRadius: 5,
                },
              ]}>
              <TextInput
                style={Styles.input}
                onChangeText={val => {
                  setAddress(val);
                }}
              />
            </View>
          </View>

          <Button
            onPress={() => {
              handleNav();
            }}
            title="Sign up"
          />

          <View style={Styles.signupCont}>
            <Text style={Styles.signupText}>
              Already have an account ?
              <Text
                style={{color: theme.colors.red}}
                onPress={() => {
                  handleNav();
                }}>
                {' '}
                Login
              </Text>
            </Text>
          </View>
          <View>
            <Image
              resizeMode="contain"
              style={{
                width: 70,
                height: 40,
                marginTop: 10,
                alignSelf: 'center',
              }}
              source={require('../../../images/logo.png')}
            />
          </View>
        </ImageBackground>
      </ScrollView>
      <Loading visible={authLoading} />
    </SafeAreaView>
  );
};

export default Signup;
