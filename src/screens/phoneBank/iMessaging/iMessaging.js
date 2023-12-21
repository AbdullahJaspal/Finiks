import React from 'react';
import {SafeAreaView, View, Text, Image, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';
import theme from '../../../constants/theme';
import Styles from './styles';

const IMessaging = () => {
  return (
    <SafeAreaView style={Styles.mainCont}>
      <View style={Styles.header}>
        <Icon
        onPress={() => {
          navigation.goBack();
        }}
        name="left" type="ant-design" color={theme.colors.blue} />
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{width: 40, height: 40, borderRadius: 100}}
            source={require('../../../images/profile.jpeg')}
          />
          <Text style={{fontSize: 12, fontWeight: '600'}}>Frodo Baggiins</Text>
        </View>
        <Icon name="left" type="ant-design" color={'transparent'} />
      </View>
      <View style={Styles.bottom}>
        <View style={Styles.bottomCont}>
          <View
            style={{
              flexDirection: 'row',
              width: '18%',
              justifyContent: 'space-between',
            }}>
            <Icon name="camera" type="entypo" color={theme.colors.gray} />
            <Icon
              name="microphone"
              type="font-awesome"
              color={theme.colors.gray}
            />
          </View>
          <View
            style={{flexDirection: 'row', width: '80%', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: 'white',
                width: '95%',
                borderRadius: 100,
                paddingLeft: 10,
                marginLeft: 5,
              }}>
              <TextInput
                style={{padding: 6}}
                placeholder="New Message"></TextInput>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IMessaging;
