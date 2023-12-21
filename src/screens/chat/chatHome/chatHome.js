import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {Icon} from '@rneui/themed';
import Styles from './styles';
import theme from '../../../constants/theme';
import Line from '../../../components/line';

const chats = [
  {
    color: '#972121',
    name: 'Full Team Chat',
    description: ' We need volunteers this weekend in Clay County',
    design: 'Campaign Manager:',
  },

  {
    color: '#FC5757',
    name: 'Policy Team Chat',
    description: ' Focus on the last part of uBI proposal',
    design: 'Policy director:',
  },
  {
    color: '#20C2CB',
    name: 'Field Team Chat',
    description: ' We need yard signs to be delivered this weekend',
    design: 'Field director:',
  },
  {
    color: '#FDBD59',
    name: 'Fundraising Team Chat',
    description:
      ' We should raise our expected goal by $50,000 this quarter...',
    design: 'Fundraising director:',
  },
  {
    color: '#5E21EB',
    name: 'Outreach Team Chat',
    description: 'DFA endorsement is 30% complete we need to finish that...',
    design: 'Outreach director: ',
  },
];

const ChatHome = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.mainCont}>
      <View style={Styles.header}>
        <Icon
          onPress={() => {
            navigation.navigate('AddToTeam');
          }}
          name="add-user"
          type="entypo"
          color={theme.colors.red}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Accounts');
          }}
          style={Styles.nameCont}>
          <Icon color="#D12E2F" name="chevron-small-down" type="entypo" />
          <Text style={{fontWeight: 'bold', color: '#545454'}}>
            HJ For Congress
          </Text>
          <Icon
            type="material-community"
            name="card-multiple"
            color="#D12E2F"
            size={18}
          />
        </TouchableOpacity>
      </View>
      <Line />
      <ScrollView>
        <View style={Styles.searchCont}>
          <View style={Styles.search}>
            <Icon size={18} color="#A6A6A6" name="search1" type="ant-design" />
            <TextInput
              style={{
                width: '90%',
                padding: 2,
              }}
              placeholder="Search"
              onChangeText={val => {
                tagSearch(val);
              }}></TextInput>
          </View>
          <Icon
            size={20}
            color={theme.colors.red}
            name="pencil"
            type="entypo"
          />
        </View>
        {chats.map(item => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Conversation');
              }}
              style={Styles.chatTab}>
              <View style={[Styles.iconCont, {backgroundColor: item.color}]}>
                <Icon name="groups" color="white" size={32} />
              </View>
              <View style={{width: '85%'}}>
                <Text style={{fontWeight: '700', fontSize: 16}}>
                  {item.name}
                </Text>
                <Text style={Styles.description}>
                  <Text style={{fontWeight: '500', fontSize: 12}}>
                    {item.design}
                  </Text>
                  {item.description}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatHome;
