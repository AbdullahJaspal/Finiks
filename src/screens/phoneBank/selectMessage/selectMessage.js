import React, {useState} from 'react';
import {SafeAreaView, View, Text, Image, ScrollView} from 'react-native';
import theme from '../../../constants/theme';
import {Icon} from '@rneui/themed';
import Styles from './styles';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../../components/button';

const SelectMessage = ({navigation}) => {
  const [GOTV, setGOTV] = useState(false);
  const [signUp, setSignup] = useState(false);
  const [canvasser, setCanvesser] = useState(false);
  return (
    <SafeAreaView style={Styles.mainCont}>
      <View style={Styles.headerCont}>
        <Icon
          onPress={() => {
            navigation.goBack();
          }}
          name="close"
          type="ant-design"
          color={theme.colors.red}
        />
        <Text style={{fontWeight: '200'}}>Choose a Message</Text>
        <Icon name="close" type="ant-design" color={'transparent'} />
      </View>

      <View style={Styles.textCont}>
        <Text style={Styles.text}>Text</Text>
      </View>
      <View>
        <View style={Styles.tab}>
          <View style={Styles.iconNameCont}>
            <Image
              style={Styles.chatImage}
              source={require('../../../images/chatt.png')}
            />
            <Text style={{width: '80%'}}>GOTV</Text>
          </View>

          <CheckBox
            disabled={false}
            value={GOTV}
            onValueChange={newValue => setGOTV(newValue)}
            boxType="square"
            tintColor={theme.colors.red}
            onCheckColor={theme.colors.white}
            onFillColor={theme.colors.red}
            onTintColor={theme.colors.red}
            size={10}
            style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
          />
        </View>
        <View style={Styles.tab}>
          <View style={Styles.iconNameCont}>
            <Image
              style={Styles.chatImage}
              source={require('../../../images/chatt.png')}
            />
            <Text style={{width: '80%'}}>Absentee Signup</Text>
          </View>

          <CheckBox
            disabled={false}
            value={signUp}
            onValueChange={newValue => setSignup(newValue)}
            boxType="square"
            tintColor={theme.colors.red}
            onCheckColor={theme.colors.white}
            onFillColor={theme.colors.red}
            onTintColor={theme.colors.red}
            size={10}
            style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
          />
        </View>
        <View style={Styles.tab}>
          <View style={Styles.iconNameCont}>
            <Image
              style={Styles.chatImage}
              source={require('../../../images/chatt.png')}
            />
            <Text style={{width: '80%'}}>Interested Canvasser</Text>
          </View>

          <CheckBox
            disabled={false}
            value={canvasser}
            onValueChange={newValue => setCanvesser(newValue)}
            boxType="square"
            tintColor={theme.colors.red}
            onCheckColor={theme.colors.white}
            onFillColor={theme.colors.red}
            onTintColor={theme.colors.red}
            size={10}
            style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
          />
        </View>
      </View>
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'flex-end',
        }}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text style={{color: theme.colors.red}}>Message:{'\n'}</Text>
          <Text>
            Hi Frodo, This is Josh from the Hannah Jacobs for Congress Campaign.
            {'\n'}
            {'\n'}I am attaching a link for you to sign up for Vote By Mail:
            {'\n'}
            {'\n'}
            The last day to sign up is July 1st!{'\n'}
            {'\n'}
            https://www.votealachua.com/MBRS
          </Text>
        </View>
        <Button wid={'90%'} title="Use This Message" />
        <Text
          style={{
            fontWeight: '200',
            alignSelf: 'center',
            marginVertical: 10,
          }}>
          Start With A Blank Message
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default SelectMessage;
