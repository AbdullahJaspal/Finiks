import {Icon} from '@rneui/themed';
import React from 'react';
import {SafeAreaView, View, Text, TextInput} from 'react-native';
import theme from '../../../constants/theme';
import Styles from './styles';

const NewEmail = () => {
  return (
    <SafeAreaView style={Styles.mainCont}>
      <View style={Styles.header}>
        <Text style={{color: theme.colors.blue}}>Cancel</Text>
      </View>
      <View style={Styles.titleCont}>
        <Text style={Styles.title}>New Message</Text>
        <View style={Styles.iconCont}>
          <Icon name="arrowup" type="ant-design" color={'white'} />
        </View>
      </View>
      <View style={Styles.inputCont}>
        <Text style={Styles.inputTitle}>To:</Text>
        <TextInput
          style={Styles.inputText}
          keyboardType="email-address"></TextInput>
      </View>
      <View style={Styles.inputCont}>
        <Text style={Styles.inputTitle}>Cc/Bcc:</Text>
        <TextInput
          style={Styles.inputText}
          keyboardType="email-address"></TextInput>
      </View>
      <View style={Styles.inputCont}>
        <Text style={Styles.inputTitle}>Subject:</Text>
        <TextInput
          style={Styles.inputText}
          keyboardType="email-address"></TextInput>
      </View>
      <View style={Styles.emailContent}>
        <TextInput
          style={Styles.email}
          keyboardType="email-address"
          multiline={true}
          placeholderTextColor="black">
          Hi Frodo, This is Josh from the Hannah Jacobs for Congress Campaign.
          {'\n'}
          {'\n'}I am attaching a link for you to sign up for Vote By Mail:
          {'\n'}
          {'\n'}
          The last day to sign up is July 1st!
          {'\n'}
          {'\n'}
          https://www.votealachua.com/MBRS
        </TextInput>
      </View>
    </SafeAreaView>
  );
};

export default NewEmail;
