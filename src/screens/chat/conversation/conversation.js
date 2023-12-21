import React from 'react';
import {SafeAreaView, View, Text, ScrollView, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
import Line from '../../../components/line';
import Styles from './styles';

const Conversation = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.mainCont}>
      <View style={Styles.header}>
        <Icon
          name="left"
          type="ant-design"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={Styles.headerMid}>
          <View style={Styles.iconCont}>
            <Icon size={15} name="groups" color="white" />
          </View>
          <Text style={{fontWeight: '500', marginLeft: 10}}>
            Full Team Chat
          </Text>
        </View>
        <Icon name="dots-three-vertical" type="entypo" />
      </View>
      <Line />
      <ScrollView>
        <View style={{height: 20}}></View>
        <View style={Styles.chatCont}>
          <Image
            style={{width: 30, height: 30, borderRadius: 100}}
            source={require('../../../images/profile.jpeg')}
          />
          <View style={Styles.message}>
            <Text style={Styles.name}>Hannah</Text>
            <Text style={Styles.msg}>
              Hey everyone thanks so much for all of your help this weekend!
            </Text>
          </View>
        </View>
        <View
          style={[
            Styles.message,
            {
              width: '55%',
              marginTop: 10,
              backgroundColor: '#77A4FC',
              marginRight: 5,
            },
          ]}>
          <Text style={[Styles.msg, {color: 'white'}]}>Happy To Help!!</Text>
        </View>
        <View style={[Styles.chatCont, {marginTop: 10}]}>
          <Image
            style={{width: 30, height: 30, borderRadius: 100}}
            source={require('../../../images/profile2.jpeg')}
          />
          <View style={Styles.message}>
            <Text style={Styles.name}>Amy</Text>
            <Text style={Styles.msg}>It was so much fun! See you soon! </Text>
          </View>
        </View>
      </ScrollView>
      <View style={Styles.bottom}>
        <View style={Styles.bottomCont}>
          <View
            style={{flexDirection: 'row', width: '82%', alignItems: 'center'}}>
            <Icon name={'plus'} type={'entypo'} />
            <View
              style={{
                backgroundColor: 'white',
                width: '85%',
                borderRadius: 100,
                paddingLeft: 10,
                marginLeft: 5,
              }}>
              <TextInput
                style={{padding: 6}}
                placeholder="New Message"></TextInput>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '18%',
              justifyContent: 'space-between',
            }}>
            <Icon name="camera" type="entypo" />
            <Icon name="microphone" type="font-awesome" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Conversation;
